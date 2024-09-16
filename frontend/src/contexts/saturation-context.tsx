import { createContext, useState, PropsWithChildren, FC } from "react";

type SaturationContextType = {
  saturation: number;
  setSaturation: (saturation: number) => void;
  defaultSaturation: number;
  resetSaturation: () => void;
};

export const SaturationContext = createContext<
  SaturationContextType | undefined
>(undefined);

const defaultSaturation = 100;

export const SaturationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [saturation, setSaturation] = useState(defaultSaturation);
  const resetSaturation = () => {
    setSaturation(defaultSaturation);
  };
  return (
    <SaturationContext.Provider
      value={{
        saturation,
        setSaturation,
        defaultSaturation,
        resetSaturation,
      }}
    >
      {children}
    </SaturationContext.Provider>
  );
};
