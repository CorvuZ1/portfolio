import { ExperienceItem } from "~/data/experience";
import { Tag } from "./tag";
import { cn } from "~/utils/cn";

export interface ExperienceCardProps extends ExperienceItem {
  width?: string;
  className?: string;
}

export const ExperienceCard = (props: ExperienceCardProps) => {
  const { period, company, role, summary, stack, width, className, href } = props;

  return (
    <article
      className={cn(
        "relative min-h-75 lg:min-h-100 card-highlight shrink-0 overflow-hidden rounded-4xl border border-white/10  p-6 lg:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl",
        className
      )}
      style={{ width }}
    >
      <div className="absolute inset-0 card-gradient opacity-80" />

      <div className="relative h-full flex flex-col lg:gap-8 lg:grid lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-100/80">{period}</p>
          <div>
            <h3 className="text-3xl font-semibold text-white font-science-gothic">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  className="underline underline-offset-4 decoration-2"
                >
                  {company}
                </a>
              ) : (
                company
              )}
            </h3>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-200 font-science-gothic">
              {role}
            </p>
          </div>
          <div className="hidden h-px w-full bg-white/10 lg:block" />
        </div>

        <div className="flex flex-col justify-between gap-6 h-full">
          <p className="text-base leading-8 text-slate-200">
            {summary}{" "}
            <a href="/" download className="text-cyan-200">
              Lorem
            </a>
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {stack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
