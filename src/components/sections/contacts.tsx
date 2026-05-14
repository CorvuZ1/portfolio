import { contacts } from "~/data/contacts";
import { Container } from "../ui/container";
import { AnimationRoot } from "../ui/animation-root";

export const ContactsSection = () => {
  return (
    <section
      id="contacts"
      className="min-h-dvh flex scroll-mt-5 items-center px-4 py-20 md:px-6 text-contrast-shadow"
    >
      <AnimationRoot>
        <Container className="grid gap-8 lg:items-center lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <p data-animation-item className="text-sm uppercase tracking-[0.34em] text-cyan-200/75">
              Dolor sit
            </p>
            <h2
              data-animation-item
              className="max-w-2xl text-4xl font-semibold text-white sm:text-5xl"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </h2>
            <p data-animation-item className="max-w-2xl text-lg leading-8 text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid gap-4">
            {contacts.map((contact, index) => (
              <a
                data-animation-item
                data-animation-item-block
                key={index}
                href={contact.href}
                target="_blank"
                className="group flex flex-col items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/6 px-6 py-5 backdrop-blur-xl transition-colors hover:border-cyan-300/35 hover:bg-white/8 sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate-500">
                    {contact.label}
                  </span>
                  <span className="mt-3 block text-xl font-semibold text-white">
                    {contact.value}
                  </span>
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors group-hover:border-cyan-300/35 group-hover:text-white">
                  Lorem
                </span>
              </a>
            ))}

            <div
              data-animation-item
              data-animation-item-block
              className="rounded-[1.75rem] border border-amber-300/20 bg-[linear-gradient(135deg,_rgba(247,146,30,0.18),_rgba(10,15,24,0.55))] p-6 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-amber-100/80">Amet elit</p>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </Container>
      </AnimationRoot>
    </section>
  );
};
