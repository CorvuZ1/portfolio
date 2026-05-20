import { contacts } from "~/data/contacts";
import { Container } from "~/components/ui/container";
import { AnimationRoot } from "~/components/ui/animation-root";
import { ContactCard } from "~/components/ui/contact-card";

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
          <div className="grid gap-4">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.href}
                href={contact.href}
                isFile={contact.isFile}
                label={contact.label}
                value={contact.value}
              />
            ))}
          </div>
        </Container>
      </AnimationRoot>
    </section>
  );
};
