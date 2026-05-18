"use client";

import { experience } from "~/data/experience";
import { Container } from "../ui/container";
import { AnimationRoot } from "../ui/animation-root";
import { useExperienceAnimation } from "~/hooks/useExperienceAnimation";
import { ExperienceCard } from "../ui/experience-card";

export const ExperienceSection = () => {
  const { sectionRef, containerRef, cardsWrapperRef } = useExperienceAnimation();

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden scroll-mt-5 text-contrast-shadow"
    >
      <Container className="py-24">
        <div className="relative">
          <AnimationRoot>
            <div className="mb-16 max-w-3xl space-y-4">
              <p
                data-animation-item
                className="text-sm uppercase tracking-[0.34em] text-cyan-200/75 font-science-gothic"
              >
                Lorem ipsum
              </p>

              <h2
                data-animation-item
                className="text-4xl font-semibold text-white sm:text-5xl font-science-gothic"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </h2>
              <p data-animation-item className="text-lg leading-8 text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </AnimationRoot>

          <div ref={containerRef} className="relative  overflow-visible">
            <div
              ref={cardsWrapperRef}
              className="flex gap-8 will-change-transform"
              style={{
                width: `${experience.length * 100}%`,
              }}
            >
              {experience.map((workplace, index) => (
                <ExperienceCard
                  href={workplace.href}
                  company={workplace.company}
                  period={workplace.period}
                  role={workplace.role}
                  stack={workplace.stack}
                  summary={workplace.summary}
                  key={workplace.company}
                  width={100 / experience.length + "%"}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
