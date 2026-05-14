"use client";

import React, { useEffect, useRef } from "react";

import {
  Bounds,
  Center,
  Float,
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./model";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScreenWidth } from "~/hooks/useScreenWidth";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Scene = () => {
  const { isXLargeOrMore } = useScreenWidth();

  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Bounds fit={!isXLargeOrMore} clip={!isXLargeOrMore} observe={!isXLargeOrMore} margin={1}>
        <Float floatIntensity={0.2} speed={0.5}>
          <Center>
            <Model />
          </Center>
        </Float>
      </Bounds>
    </Canvas>
  );
};

export default Scene;
