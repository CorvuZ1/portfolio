"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "~/data/experience";
import { Container } from "../ui/container";
import { TextAnimation } from "../animations/text";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const cardsWrapper = cardsWrapperRef.current;

      if (!cardsWrapper || !container) return;

      const cards = gsap.utils.toArray<HTMLElement>(cardsWrapper.children);
      const totalCards = cards.length;

      const cardWidth = cardsWrapper.scrollWidth / totalCards;

      const scrollWidth = cardWidth * (totalCards - 1);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(cardsWrapper, {
        x: -scrollWidth,
        ease: "none",
      });

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.3,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 80%",
              end: "left 20%",
              scrub: 0.5,
            },
          }
        );
      });
    },
    {
      scope: sectionRef,
      revertOnUpdate: true,
    }
  );

  return (
    <section ref={sectionRef} id="experience" className="relative overflow-hidden scroll-mt-5">
      <Container className="py-24">
        <div className="relative">
          <div className="mb-16 max-w-3xl space-y-4">
            <TextAnimation>
              <p className="text-sm uppercase tracking-[0.34em] text-cyan-200/75">Lorem ipsum</p>

              <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </TextAnimation>
          </div>

          <div ref={containerRef} className="relative  overflow-visible">
            <div
              ref={cardsWrapperRef}
              className="flex gap-8"
              style={{
                width: `${experience.length * 100}%`,
              }}
            >
              {experience.map((workplace, index) => (
                <article
                  key={workplace.company}
                  className="relative min-h-[400px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,_rgba(255,255,255,0.09),_rgba(255,255,255,0.03))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl"
                  style={{
                    width: `${100 / experience.length}%`,
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.16),_transparent_34%)] opacity-80" />

                  <div className="relative grid h-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-amber-100/80">
                        {workplace.period}
                      </p>
                      <div>
                        <h3 className="text-3xl font-semibold text-white">{workplace.company}</h3>
                        <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">
                          {workplace.role}
                        </p>
                      </div>
                      <div className="hidden h-px w-full bg-white/10 lg:block" />
                      <p className="text-sm leading-7 text-slate-400">
                        Lorem {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <div className="flex h-full flex-col justify-between gap-6">
                      <p className="text-base leading-8 text-slate-200">{workplace.summary}</p>

                      <div className="flex flex-wrap gap-2">
                        {workplace.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
