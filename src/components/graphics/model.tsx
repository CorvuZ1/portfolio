"use client";

import { RefObject } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { ThreeElements } from "@react-three/fiber";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { useModelAnimation } from "~/hooks/useModelAnimation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
      <mesh ref={bladeRef} geometry={(nodes.blade as Mesh).geometry}>
        <meshStandardMaterial
          attach="material"
          emissiveIntensity={4}
          emissive="#004bff"
          color="#9ab7fc"
        />
      </mesh>
      <mesh geometry={(nodes.blade as Mesh).geometry} visible={false} />

      <group ref={handleRef} rotation={[0, -9, 0]}>
        <mesh geometry={(nodes.handle as Mesh).geometry} material={materials["handle-material"]} />
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
