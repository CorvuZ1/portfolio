import Link from "next/link";
import { cn } from "~/utils/cn";
import { Container } from "./container";
import { sections } from "~/data/sections";
import { AriaAttributes } from "react";

export interface HeaderProps extends AriaAttributes {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props;

  return (
    <header
      data-component="header"
      className={cn("absolute left-0 right-0 top-0 z-50 md:pt-3 md:px-6", className)}
      {...rest}
    >
      <Container className="flex flex-col gap-3 rounded-bl-[1.75rem] rounded-br-[1.75rem] md:rounded-[1.75rem] border border-white/10 bg-slate-950/55 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-left">
          <span className="block text-[0.68rem] uppercase tracking-[0.35em] text-cyan-200/70">
            Lorem ipsum
          </span>
          <span className="block text-sm font-semibold text-white">dolor.sit</span>
        </Link>

        <div className="hidden flex-wrap items-center gap-2 text-sm text-slate-200 2xl:flex md:justify-end">
          {sections.map((section, index) => {
            const isFirst = index === 0;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "min-h-10 rounded-full border px-3.5 py-2 text-xs transition sm:px-4 sm:text-sm border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white",
                  isFirst &&
                    "border-cyan-300/70 hover:border-cyan-300/70 bg-cyan-300/12 text-white hover:text-white"
                )}
              >
                {section.label}
              </a>
            );
          })}
        </div>
      </Container>
    </header>
  );
};
