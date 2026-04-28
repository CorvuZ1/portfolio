import { Container } from "../ui/container";
import { TextAnimation } from "../animations/text";
import { BlockAnimation } from "../animations/block";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-dvh flex scroll-mt-5 items-center pb-16 pt-36 sm:pt-32">
      <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
        <div className="space-y-8">
          <div className="space-y-5">
            <TextAnimation>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/75">
                Sit amet consectetur
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </TextAnimation>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-100">
            <BlockAnimation to={{ delay: 0.8 }}>
              {["Lorem", "Ipsum", "Dolor", "Amet", "Elit"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur"
                >
                  {skill}
                </span>
              ))}
            </BlockAnimation>
          </div>

          <div className="flex flex-col items-stretch gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <BlockAnimation to={{ delay: 1.3 }}>
              <a
                href="#experience"
                className="rounded-full bg-cyan-300 px-6 py-3 text-center font-semibold 200 transition-colors text-slate-950 hover:bg-cyan-200"
              >
                Lorem ipsum
              </a>
              <a
                href="#contacts"
                className="rounded-full border border-white/15 px-6 py-3 text-center font-medium 200 transition-colors text-white hover:border-white/40 hover:bg-white/6"
              >
                Dolor sit
              </a>
            </BlockAnimation>
          </div>
        </div>
        <BlockAnimation to={{ delay: 1.9 }}>
          <p className="text-white">Right block</p>
        </BlockAnimation>
      </Container>
    </section>
  );
};
