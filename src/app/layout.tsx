"use client";

import ReactLenis from "lenis/react";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Navigation } from "~/components/ui/navigation";
import { cn } from "~/utils/cn";
import { Cursor } from "~/components/layout/cursor";

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

  return (
    <>
      <ReactLenis root options={{ anchors: true }} />
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
