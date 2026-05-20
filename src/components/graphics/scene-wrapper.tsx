"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const DynamicScene = dynamic(() => import("~/components/graphics/scene"), {
  ssr: false,
});

export const SceneWrapper = () => {
  return (
    <div className="fixed -z-1 left-0 top-0 w-full h-full pointer-events-none **:pointer-events-none!">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false }}>
        <Suspense fallback={null}>
          <DynamicScene />
        </Suspense>
      </Canvas>
    </div>
  );
};
