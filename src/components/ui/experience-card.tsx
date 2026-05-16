import { ExperienceItem } from "~/data/experience";
import { Tag } from "./tag";
import { cn } from "~/utils/cn";

export interface ExperienceCardProps extends ExperienceItem {
  width?: string;
  className?: string;
}

export const ExperienceCard = (props: ExperienceCardProps) => {
  const { period, company, role, summary, stack, width, className } = props;

  return (
    <article
      className={cn(
        "relative min-h-[400px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,_rgba(255,255,255,0.09),_rgba(255,255,255,0.03))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl",
        className
      )}
      style={{ width }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.16),_transparent_34%)] opacity-80" />

      <div className="relative grid h-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-100/80">{period}</p>
          <div>
            <h3 className="text-3xl font-semibold text-white font-science-gothic">{company}</h3>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-200 font-science-gothic">
              {role}
            </p>
          </div>
          <div className="hidden h-px w-full bg-white/10 lg:block" />
          <p className="text-sm leading-7 text-slate-400"></p>
        </div>

        <div className="flex h-full flex-col justify-between gap-6">
          <p className="text-base leading-8 text-slate-200">{summary}</p>

          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <Tag key={item} variant="stack">
                {item}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
