"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const DynamicScene = dynamic(() => import("./scene"), {
  ssr: false,
});

export const SceneWrapper = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-full" aria-hidden>
      <Suspense fallback={null}>
        <DynamicScene />
      </Suspense>
    </div>
  );
};
