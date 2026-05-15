import { useEffect, useState } from "react";
import { isClientSide } from "~/utils/isClientSide";

type ScreenType = {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
};

export const useBreakpoints = (): ScreenType => {
  const getScreens = (): ScreenType => ({
    xs: isClientSide ? window.matchMedia("(min-width: 30rem)").matches : false,
    sm: isClientSide ? window.matchMedia("(min-width: 40rem)").matches : false,
    md: isClientSide ? window.matchMedia("(min-width: 48rem)").matches : false,
    lg: isClientSide ? window.matchMedia("(min-width: 64rem)").matches : false,
    xl: isClientSide ? window.matchMedia("(min-width: 80rem)").matches : false,
    xxl: isClientSide ? window.matchMedia("(min-width: 96rem)").matches : false,
  });

  const [screen, setScreen] = useState<ScreenType>(getScreens);

  useEffect(() => {
    const handleResize = () => setScreen(getScreens());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screen;
};
