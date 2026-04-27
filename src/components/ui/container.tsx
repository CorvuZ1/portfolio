import { ReactNode } from "react";
import { cn } from "~/utils/cn";

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { className, children } = props;

  return (
    <div
      className={cn("mx-auto px-4 md:px-8 max-w-7xl w-full", className)}
      data-component="container"
    >
      {children}
    </div>
  );
};
