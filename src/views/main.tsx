import { AboutSection } from "~/components/sections/about";
import { ContactsSection } from "~/components/sections/contacts";
import { ExperienceSection } from "~/components/sections/experience";
import { SceneWrapper } from "~/components/graphics/scene-wrapper";

export const MainView = () => {
  return (
    <>
      <SceneWrapper />

      <AboutSection />
      <ExperienceSection />
      <ContactsSection />

      <div className="model-pin" />
    </>
  );
};
