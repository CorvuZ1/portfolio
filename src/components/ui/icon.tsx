import { SVGProps } from "react";
import { ICONS } from "~/config/icons";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: (typeof ICONS)[number];
}

export const Icon = (props: IconProps) => {
  const { name, width, height, ...rest } = props;

  const customHeight = height || width;
  const viewBox = width && customHeight ? `0 0 ${width} ${customHeight}` : undefined;

  return (
    <svg width={width} height={customHeight} viewBox={viewBox} {...rest} data-component="icon">
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};
