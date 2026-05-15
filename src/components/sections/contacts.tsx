import { contacts } from "~/data/contacts";
import { Container } from "../ui/container";
import { AnimationRoot } from "../ui/animation-root";
import { Icon } from "../ui/icon";
import { cn } from "~/utils/cn";

export const ContactsSection = () => {
  return (
    <section
      id="contacts"
      className="min-h-screen flex scroll-mt-5 items-center px-4 py-20 md:px-6 text-contrast-shadow lg:-scroll-mt-1000"
    >
      <AnimationRoot>
        <Container className="grid gap-8 lg:items-center lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <p
              data-animation-item
              className="text-sm uppercase tracking-[0.34em] text-cyan-200/75 font-science-gothic"
            >
              Dolor sit
            </p>
            <h2
              data-animation-item
              className="max-w-2xl text-4xl font-semibold text-white sm:text-5xl font-science-gothic"
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </h2>
            <p data-animation-item className="max-w-2xl text-lg leading-8 text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* <span className="rounded-full border border-white/10 px-4 py-4 text-sm text-slate-300 transition-colors group-hover:border-amber-300/50 group-hover:text-white">
                <Icon name="download" className="text-white w-5 h-5" />
              </span> */}

          <div className="grid gap-4">
            {contacts.map((contact, index) => (
              <a
                data-animation-item
                data-animation-item-block
                key={index}
                href={contact.href}
                target="_blank"
                className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-black/5 px-6 py-5 backdrop-blur-xl transition-colors hover:border-cyan-300/35 hover:bg-white/5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate-500">
                    {contact.label}
                  </span>
                  <span className="mt-3 block text-lg text-white">{contact.value}</span>
                </span>

                <span
                  className={cn(
                    "rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors group-hover:border-cyan-300/35 group-hover:text-white",
                    contact.isFile && "p-4"
                  )}
                >
                  {contact.isFile ? (
                    <Icon name="download" className="text-white w-5 h-5" />
                  ) : (
                    "Lorem"
                  )}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </AnimationRoot>
    </section>
  );
};
