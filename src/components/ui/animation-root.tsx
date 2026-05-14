"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Children, cloneElement, ReactElement, RefObject, useRef } from "react";
import { cn } from "~/utils/cn";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export interface AnimationRoot {
  children: ReactElement<{
    ref: RefObject<HTMLElement | null>;
    className?: string;
  }>;
}

export const AnimationRoot = (props: AnimationRoot) => {
  const { children } = props;
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) return;

      const q = gsap.utils.selector(rootRef);
      const items = q("[data-animation-item]");

      if (!items.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 99%",
          toggleActions: "play none none reverse",
        },
      });

      items.forEach((item) => {
        gsap.set(item, { opacity: 1 });

        if (item.hasAttribute("data-animation-item-block")) {
          tl.fromTo(
            item,
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "back.out",
              duration: 0.4,
            }
          );
          return;
        }

        const split = new SplitText(item, {
          type: "words",
        });

        tl.fromTo(
          split.words,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "back.out",
            duration: 0.5,
            stagger: 0.05,
          }
        );
      });
    },
    {
      scope: rootRef,
    }
  );

  return cloneElement(Children.only(children), {
    ref: rootRef,
    className: cn(children.props.className, "**:data-animation-item:opacity-0"),
  });
};
