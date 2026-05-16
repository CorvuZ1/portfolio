import { ContactItem } from "~/data/contacts";
import { Icon } from "./icon";
import { cn } from "~/utils/cn";

export interface ContactCardProps extends ContactItem {
  className?: string;
}

export const ContactCard = (props: ContactCardProps) => {
  const { label, value, href, isFile, className } = props;

  return (
    <a
      data-animation-item
      data-animation-item-block
      href={href}
      target="_blank"
      className={cn(
        "group flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-black/5 px-6 py-5 backdrop-blur-xl transition-colors hover:border-cyan-300/35 hover:bg-white/5 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <span>
        <span className="block text-xs uppercase tracking-[0.3em] text-slate-500">
          {label}
        </span>
        <span className="mt-3 block text-lg text-white">{value}</span>
      </span>

      <span
        className={cn(
          "rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors group-hover:border-cyan-300/35 group-hover:text-white",
          isFile && "p-4"
        )}
      >
        {isFile ? (
          <Icon name="download" className="text-white w-5 h-5" />
        ) : (
          "Lorem"
        )}
      </span>
    </a>
  );
};
