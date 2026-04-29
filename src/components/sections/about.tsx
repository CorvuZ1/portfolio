import { AnimationRoot } from "../ui/animation-root";
import { Container } from "../ui/container";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-dvh flex scroll-mt-5 items-center pb-16 pt-36 sm:pt-32">
      <AnimationRoot>
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
          <div className="space-y-8">
            <div className="space-y-5">
              <p
                data-animation-item
                className="text-sm uppercase tracking-[0.35em] text-cyan-200/75"
              >
                Sit amet consectetur
              </p>
              <h1
                data-animation-item
                className="max-w-4xl text-4xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p
                data-animation-item
                className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </div>

            <div
              data-animation-item
              data-animation-item-block
              className="flex flex-wrap gap-3 text-sm text-slate-100"
            >
              {["Lorem", "Ipsum", "Dolor", "Amet", "Elit"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-stretch gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                data-animation-item
                data-animation-item-block
                href="#experience"
                className="rounded-full bg-cyan-300 px-6 py-3 text-center font-semibold 200 transition-colors text-slate-950 hover:bg-cyan-200"
              >
                Lorem ipsum
              </a>
              <a
                data-animation-item
                data-animation-item-block
                href="#contacts"
                className="rounded-full border border-white/15 px-6 py-3 text-center font-medium 200 transition-colors text-white hover:border-white/40 hover:bg-white/6"
              >
                Dolor sit
              </a>
            </div>
          </div>
          <p className="text-white" data-animation-item>
            Right block
          </p>
        </Container>
      </AnimationRoot>
    </section>
  );
};
