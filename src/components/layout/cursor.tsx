"use client";

import gsap from "gsap";
import { Icon } from "~/components/ui/icon";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { cn } from "~/utils/cn";

gsap.registerPlugin(useGSAP);

export const Cursor = () => {
  const cursorFollower = useRef<SVGSVGElement>(null);
  const [isMouseMoved, setIsMouseMoved] = useState(false);
  const rotationTween = useRef<gsap.core.Tween>(null);
  const prevHoverState = useRef(false);

  const checkInteractive = (element: HTMLElement) => {
    return (
      element.tagName === "A" ||
      element.tagName === "BUTTON" ||
      element.closest("a") !== null ||
      element.closest("button") !== null ||
      element.onclick !== null
    );
  };

  const updateRotation = (duration: number = 3) => {
    if (rotationTween.current) {
      rotationTween.current.kill();
    }

    rotationTween.current = gsap.to(cursorFollower.current, {
      rotation: "+=360",
      duration,
      ease: "none",
      repeat: -1,
    });
  };

  useGSAP(
    () => {
      gsap.set(cursorFollower.current, {
        xPercent: -50,
        yPercent: -50,
        opacity: 0.4,
      });

      const xFollowerTo = gsap.quickTo(cursorFollower.current, "x", {
        duration: 0.5,
        ease: "power3",
        opacity: 0.1,
      });
      const yFollowerTo = gsap.quickTo(cursorFollower.current, "y", {
        duration: 0.5,
        ease: "power3",
        opacity: 0.1,
      });

      updateRotation();

      window.addEventListener("pointermove", (e) => {
        if (e.pointerType !== "mouse") return;

        if (!isMouseMoved) setIsMouseMoved(true);

        const isInteractive = checkInteractive(e.target as HTMLElement);

        if (isInteractive !== prevHoverState.current) {
          prevHoverState.current = isInteractive;

          if (isInteractive) {
            updateRotation(1);
          } else {
            updateRotation();
          }
        }

        xFollowerTo(e.clientX);
        yFollowerTo(e.clientY);
      });
    },
    { revertOnUpdate: true, dependencies: [isMouseMoved] }
  );

  return isMouseMoved ? (
    <Icon
      ref={cursorFollower}
      name="cursor-follower"
      className={cn("text-white w-14 scale-90 z-999 fixed pointer-events-none")}
    />
  ) : null;
};
