import { useEffect, useState } from "react";

type ScreenType = {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  "2xl": boolean;
};

export const useScreenWidth = (): ScreenType => {
  const getScreens = (): ScreenType => ({
    xs: window.matchMedia("(min-width: 30rem)").matches,
    sm: window.matchMedia("(min-width: 40rem)").matches,
    md: window.matchMedia("(min-width: 48rem)").matches,
    lg: window.matchMedia("(min-width: 64rem)").matches,
    xl: window.matchMedia("(min-width: 80rem)").matches,
    "2xl": window.matchMedia("(min-width: 96rem)").matches,
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
