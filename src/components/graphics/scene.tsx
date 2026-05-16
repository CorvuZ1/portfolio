"use client";

import gsap from "gsap";
import { Bounds, Center, Float, useGLTF } from "@react-three/drei";
import { Model } from "./model";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBreakpoints } from "~/hooks/useBreakpoints";

useGLTF.preload("/LightSaber.glb");

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Scene = () => {
  const { lg } = useBreakpoints();

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Bounds fit={!lg} clip={!lg} observe={!lg} margin={1}>
        <Float floatIntensity={0.2} speed={0.5}>
          <Center>
            <Model />
          </Center>
        </Float>
      </Bounds>
    </>
  );
};

export default Scene;
