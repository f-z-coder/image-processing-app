import { createContext, useState, PropsWithChildren, FC } from "react";

type BrightnessContextType = {
  brightness: number;
  setBrightness: (brightness: number) => void;
  defaultBrightness: number;
  resetBrightness: () => void;
};

export const BrightnessContext = createContext<
  BrightnessContextType | undefined
>(undefined);

const defaultBrightness = 100;

export const BrightnessProvider: FC<PropsWithChildren> = ({ children }) => {
  const [brightness, setBrightness] = useState(defaultBrightness);
  const resetBrightness = () => {
    setBrightness(defaultBrightness);
  };
  return (
    <BrightnessContext.Provider
      value={{ brightness, setBrightness, defaultBrightness, resetBrightness }}
    >
      {children}
    </BrightnessContext.Provider>
  );
};
