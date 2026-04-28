import { contacts } from "~/data/contacts";
import { Container } from "../ui/container";
import { TextAnimation } from "../animations/text";
import { BlockAnimation } from "../animations/block";

export const ContactsSection = () => {
  return (
    <section id="contacts" className="min-h-dvh flex scroll-mt-5 items-center px-4 py-20 md:px-6">
      <Container className="grid gap-8 lg:items-center lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <TextAnimation>
            <p className="text-sm uppercase tracking-[0.34em] text-cyan-200/75">Dolor sit</p>
            <h2 className="max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </TextAnimation>
        </div>

        <div className="grid gap-4">
          {contacts.map((contact, index) => (
            <BlockAnimation key={contact.label} to={{ delay: 0.8 + index * 0.2 }}>
              <a
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
            </BlockAnimation>
          ))}

          <div className="rounded-[1.75rem] border border-amber-300/20 bg-[linear-gradient(135deg,_rgba(247,146,30,0.18),_rgba(10,15,24,0.55))] p-6">
            <TextAnimation>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-100/80">Amet elit</p>
            </TextAnimation>
            <TextAnimation>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </TextAnimation>
          </div>
        </div>
      </Container>
    </section>
  );
};
