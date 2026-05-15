import { useGSAP } from "@gsap/react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";
import { Group, MathUtils, Mesh } from "three";
import { useScreenWidth } from "./useScreenWidth";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

export const useModelAnimation = () => {
  const modelRef = useRef<Mesh>(null);
  const bladeRef = useRef<Mesh>(null);
  const handleRef = useRef<Mesh>(null);
  const { isLargeOrMore } = useScreenWidth();

  useGSAP(() => {
    if (!bladeRef.current || !handleRef.current || !modelRef.current) return;

    const flicker = () => {
      gsap.to(bladeRef.current!.material, {
        emissiveIntensity: gsap.utils.random(2.8, 3.2),
        duration: gsap.utils.random(0.02, 0.1),
        onComplete: flicker,
      });
    };

    flicker();

    gsap.to(handleRef.current.rotation, {
      y: 10,
      scrollTrigger: {
        trigger: "body",
        scrub: true,
      },
    });

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    masterTl.to(bladeRef.current.scale, { y: 0.01, duration: 1 }, 0);

    masterTl.to(
      modelRef.current.rotation,
      {
        z: MathUtils.degToRad(110),
        duration: 1,
      },
      0
    );

    masterTl.to(
      modelRef.current.position,
      {
        y: 5,
        x: 1,
        duration: 1,
      },
      0
    );

    masterTl.to(
      modelRef.current.rotation,
      {
        z: MathUtils.degToRad(-10),
        duration: 1,
      },
      1
    );

    masterTl.to(
      modelRef.current.position,
      {
        y: 0,
        x: -4,
        duration: 1,
      },
      1
    );

    isLargeOrMore &&
      masterTl.to(
        modelRef.current.scale,
        {
          x: 6,
          y: 6,
          z: 6,
          duration: 1,
        },
        1
      );

    gsap.to(bladeRef.current.scale, {
      y: 1,
      immediateRender: false,
      scrollTrigger: {
        pin: isLargeOrMore ? "#contacts" : ".model-pin",
        start: "bottom bottom",
        end: isLargeOrMore ? "+=2000" : "+=1200",
        scrub: true,
        pinSpacing: true,
      },
    });
  });

  return {
    modelRef,
    bladeRef,
    handleRef,
  };
};
