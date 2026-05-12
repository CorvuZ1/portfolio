"use client";

import React, { useEffect, useRef } from "react";

import { Bounds, Center, Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./model";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScreenWidth } from "~/hooks/useScreenWidth";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface SceneProps {
  className?: string;
}

const Scene = (props: SceneProps) => {
  const { className } = props;
  const { isXLargeOrMore } = useScreenWidth();

  const view = (
    <Float floatIntensity={0.1} speed={0.5}>
      <Center>
        <Model />
      </Center>
    </Float>
  );

  return (
    <Canvas className={className} shadows>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {isXLargeOrMore ? (
        view
      ) : (
        <Bounds fit clip observe margin={1}>
          {view}
        </Bounds>
      )}
    </Canvas>
  );
};

export default Scene;
