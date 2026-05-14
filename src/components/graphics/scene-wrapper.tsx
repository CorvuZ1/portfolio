"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const DynamicScene = dynamic(() => import("./scene"), {
  ssr: false,
});

export const SceneWrapper = () => {
  return (
    <div className="fixed -z-1 left-0 top-0 w-full h-full pointer-events-none **:pointer-events-none!">
      <Suspense fallback={null}>
        <DynamicScene />
      </Suspense>
    </div>
  );
};
