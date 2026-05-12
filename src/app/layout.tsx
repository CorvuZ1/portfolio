"use client";

import ReactLenis, { useLenis } from "lenis/react";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode, useEffect, useLayoutEffect } from "react";
import { Navigation } from "~/components/ui/navigation";
import { cn } from "~/utils/cn";
import { Cursor } from "~/components/layout/cursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  const dotsBackgroundStyles =
    "before:absolute before:pointer-events-none before:left-0 before:top-0 before:h-full before:w-full before:dots-background before:-z-1 before:fixed";

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });
  }, [lenis]);

  return (
    <>
      <ReactLenis root options={{ anchors: true, stopInertiaOnNavigate: true }} />
      <Cursor />

      <html
        lang="ru"
        className={cn(
          "h-full antialiased overflow-x-hidden bg-app-background selection:bg-selection-background",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <body className={cn("min-h-dvh flex flex-col", dotsBackgroundStyles)}>
          <Navigation />

          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
