"use client";

import { RefObject, useEffect, useRef } from "react";
import { Html, useBounds, useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial, MeshLambertMaterial, Plane, Vector3 } from "three";
import { ThreeElements, useThree } from "@react-three/fiber";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bloom, EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { useModelAnimation } from "~/hooks/useModelAnimation";
import { useScreenWidth } from "~/hooks/useBreakpoints";

gsap.registerPlugin(useGSAP, ScrollTrigger);

useGLTF.preload("/LightSaber.glb");

type GroupElementProps = ThreeElements["group"];
export interface ModelProps extends GroupElementProps {}

export const Model = (props: ModelProps) => {
  const { nodes, materials } = useGLTF("/LightSaber.glb");
  const { bladeRef, modelRef, handleRef } = useModelAnimation();

  return (
    <group
      {...props}
      scale={[11, 11, 11]}
      position={[1, 0, 0]}
      rotation={[0, 0, 1]}
      ref={modelRef}
      dispose={null}
    >
      <mesh ref={bladeRef} castShadow receiveShadow geometry={(nodes.blade as Mesh).geometry}>
        <meshStandardMaterial
          attach="material"
          emissiveIntensity={4}
          emissive="#004bff"
          color="#9ab7fc"
        />
      </mesh>
      <mesh geometry={(nodes.blade as Mesh).geometry} visible={false} />

      <group ref={handleRef} rotation={[0, -9, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.handle as Mesh).geometry}
          material={materials["handle-material"]}
        />
      </group>
      <EffectComposer>
        <SelectiveBloom
          selection={bladeRef as RefObject<Mesh>}
          lights={[]}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          intensity={2}
        />
      </EffectComposer>
    </group>
  );
};
