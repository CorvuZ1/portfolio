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

      gsap.to(cursorFollower.current, {
        rotation: 360,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "linear",
        scale: 1.2,
      });

      window.addEventListener("pointermove", (e) => {
        if (e.pointerType !== "mouse") return;

        if (!isMouseMoved) setIsMouseMoved(true);

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
