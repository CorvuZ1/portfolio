import { AriaAttributes } from "react";
import { sections } from "~/data/sections";
import { cn } from "~/utils/cn";

export interface SideNavigationProps extends AriaAttributes {
  activeSection: any;
  className?: string;
}

export const SideNavigation = (props: SideNavigationProps) => {
  const { activeSection, className, "aria-label": ariaLabel, ...rest } = props;

  return (
    <aside
      data-component="side-navigation"
      className={cn(
        "pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 transition duration-300 2xl:flex",
        className
      )}
      {...rest}
    >
      <nav
        aria-label={ariaLabel ?? "Lorem ipsum navigation"}
        className="flex flex-col gap-3 rounded-4xl border border-white/10 bg-slate-950/60 px-3 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
      >
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;

          return (
            <a
              key={index}
              href={`#${section.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`pointer-events-auto group flex items-center gap-3 rounded-full px-3 py-2 text-left transition ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/6 hover:text-white"
              }`}
            >
              <span
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  isActive ? "bg-cyan-300 shadow-[0_0_16px_rgba(125,211,252,0.9)]" : "bg-white/35"
                )}
              />
              <span className="flex flex-col">
                <span className="text-[0.62rem] uppercase tracking-[0.32em] text-slate-400">
                  {index + 1}
                </span>
                <span className="text-xs font-medium">{section.label}</span>
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
