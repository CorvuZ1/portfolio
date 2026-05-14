import { AriaAttributes } from "react";
import { sections } from "~/data/sections";
import { cn } from "~/utils/cn";

export interface MobileNavigationProps extends AriaAttributes {
  activeSection: any;
  className?: string;
}

export const MobileNavigation = (props: MobileNavigationProps) => {
  const { activeSection, className, "aria-label": ariaLabel, ...rest } = props;

  return (
    <nav
      aria-label={ariaLabel || "Lorem ipsum navigation"}
      data-component="mobile-navigation"
      className={cn(
        "fixed bottom-3 left-1/2 z-40 items-center flex w-[calc(100%-1.5rem)] max-w-sm -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-slate-950/75 px-2 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 2xl:hidden",
        className
      )}
      {...rest}
    >
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "flex-1 rounded-full px-3 py-2 text-center text-xs font-medium transition",
              isActive ? "bg-cyan-300 text-slate-950" : "text-slate-200 hover:bg-white/8"
            )}
          >
            {section.label}
          </a>
        );
      })}
    </nav>
  );
};
