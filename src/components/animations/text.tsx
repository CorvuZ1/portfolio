"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Children, cloneElement, ReactElement, useRef } from "react";
import { cn } from "~/utils/cn";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export type ReactElementChildrenType = ReactElement<{
  className: string;
  ref: (el: HTMLElement) => void;
}>;

export interface TextAnimationProps {
  children: ReactElementChildrenType | ReactElementChildrenType[];
  from?: GSAPTweenVars;
  to?: GSAPTweenVars;
}

export const TextAnimation = ({ children, from, to }: TextAnimationProps) => {
  const elementsRef = useRef<HTMLElement[]>([]);

  const setRef = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      elementsRef.current.forEach((element) => {
        const split = new SplitText(element, {
          type: "lines",
        });

        gsap.set(element, { opacity: 1 });

        gsap.fromTo(
          split.lines,
          {
            y: -50,
            opacity: 0,
            ...from,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 99%",
              end: "bottom 1%",
              toggleActions: "play reverse play reverse",
            },
            ...to,
          }
        );
      });
    },
    { revertOnUpdate: true }
  );

  return Children.map(children, (child, index) =>
    cloneElement(child, {
      key: index,
      ref: setRef,
      className: cn(child.props.className, "opacity-0"),
    })
  );
};
