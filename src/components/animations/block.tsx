"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Children, cloneElement, ReactElement, useRef } from "react";
import { cn } from "~/utils/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type ReactElementChildrenType = ReactElement<{
  className?: string;
  ref?: (el: HTMLElement | null) => void;
}>;

export interface BlockAnimationProps {
  children: ReactElementChildrenType | ReactElementChildrenType[];
  from?: GSAPTweenVars;
  to?: GSAPTweenVars;
}

export const BlockAnimation = ({ children, from, to }: BlockAnimationProps) => {
  const elementsRef = useRef<HTMLElement[]>([]);

  const setRef = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      elementsRef.current.forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: -50,
            ...from,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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
