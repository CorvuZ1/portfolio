import { cn } from "~/utils/cn";

export interface TagProps {
  children: string;
  variant?: "default";
  className?: string;
}

export const Tag = (props: TagProps) => {
  const { children, variant = "default", className } = props;

  const variants = {
    default: "rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs text-slate-200",
  };

  return <span className={cn(variants[variant], className)}>{children}</span>;
};
