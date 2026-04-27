import { Container } from "../ui/container";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-dvh flex scroll-mt-5 items-center pb-16 pt-36 sm:pt-32">
      <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-amber-100">
            Lorem ipsum dolor
          </span>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/75">
              Sit amet consectetur
            </p>
            <h1
              data-text-reveal
              className="max-w-4xl text-4xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-100">
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
              href="#experience"
              className="rounded-full bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Lorem ipsum
            </a>
            <a
              href="#contacts"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-medium text-white transition hover:border-white/40 hover:bg-white/6"
            >
              Dolor sit
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/7 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.18),_transparent_40%)]" />
          <div className="relative space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Lorem</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Ipsum dolor sit</h2>
              </div>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/12 px-3 py-1 text-xs font-medium text-emerald-100">
                Amet elit
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Consectetur</p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Adipiscing</p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Tempor incididunt</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
