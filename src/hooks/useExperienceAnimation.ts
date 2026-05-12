import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const useExperienceAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const cardsWrapper = cardsWrapperRef.current;

      if (!cardsWrapper || !container) return;

      const cards = gsap.utils.toArray<HTMLElement>(cardsWrapper.children);

      const scrollWidth = cardsWrapper.scrollWidth - container.offsetWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(cardsWrapper, {
        x: -scrollWidth,
        ease: "none",
      });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.3,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 80%",
              end: "left 20%",
              scrub: 0.5,
            },
          }
        );
      });
    },
    {
      scope: sectionRef,
      revertOnUpdate: true,
    }
  );

  return {
    sectionRef,
    containerRef,
    cardsWrapperRef,
  };
};
