"use client";

import { useRouter } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import { Header } from "~/components/ui/header";
import { MobileNavigation } from "~/components/ui/mobile-navigation";
import { SideNavigation } from "~/components/ui/side-navigation";
import { sections } from "~/data/sections";
import { cn } from "~/utils/cn";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState<boolean>(false);
  const router = useRouter();

  const updateFloatingVisibility = useEffectEvent(() => {
    const floatingScrollOffset = 96;
    const nextValue = window.scrollY > floatingScrollOffset;

    setIsFloatingNavVisible((currentValue) =>
      currentValue === nextValue ? currentValue : nextValue
    );
  });

  const updateActiveSection = useEffectEvent((entries: IntersectionObserverEntry[]) => {
    const nextEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0];

    const nextSectionId = nextEntry?.target.id;

    if (!nextSectionId) return;

    setActiveSection((currentValue) =>
      currentValue === nextSectionId ? currentValue : nextSectionId
    );
  });

  useEffect(() => {
    updateFloatingVisibility();

    const handleScroll = () => {
      updateFloatingVisibility();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element) => element !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        updateActiveSection(entries);
      },
      {
        threshold: 0.25,
      }
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    router.replace("/");
  }, []);

  return (
    <>
      <Header aria-hidden={isFloatingNavVisible} />

      <SideNavigation
        aria-hidden={!isFloatingNavVisible}
        className={cn(
          isFloatingNavVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
        )}
        activeSection={activeSection}
      />

      <MobileNavigation
        aria-hidden={!isFloatingNavVisible}
        className={cn(
          isFloatingNavVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        )}
        activeSection={activeSection}
      />
    </>
  );
};
