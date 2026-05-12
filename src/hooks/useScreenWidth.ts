import { useEffect, useState } from "react";

type DeviceType = {
  isXSmallOrLess: boolean;
  isSmallOrMore: boolean;
  isMediumOrMore: boolean;
  isLargeOrMore: boolean;
  isXLargeOrMore: boolean;
};

export const useScreenWidth = (): DeviceType => {
  const checkWidth = () => {
    const width = window.innerWidth;

    return {
      isXSmallOrLess: width < 480,
      isSmallOrMore: width >= 480,
      isMediumOrMore: width >= 768,
      isLargeOrMore: width >= 1024,
      isXLargeOrMore: width >= 1280,
    };
  };

  const [device, setDevice] = useState<DeviceType>(checkWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setDevice(checkWidth));

    return () => window.removeEventListener("resize", () => setDevice(checkWidth));
  }, []);

  return device;
};
