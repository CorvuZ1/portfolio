import { AboutSection } from "~/components/sections/about";
import { ContactsSection } from "~/components/sections/contacts";
import { ExperienceSection } from "~/components/sections/experience";

export const MainView = () => {
  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <ContactsSection />

      <div className="model-pin" />
    </>
  );
};
