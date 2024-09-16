import { createContext, useState, PropsWithChildren, FC } from "react";

type ContrastContextType = {
  contrast: number;
  setContrast: (contrast: number) => void;
  defaultContrast: number;
  resetContrast: () => void;
};

export const ContrastContext = createContext<ContrastContextType | undefined>(
  undefined,
);

const defaultContrast = 100;

export const ContrastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [contrast, setContrast] = useState(defaultContrast);
  const resetContrast = () => {
    setContrast(defaultContrast);
  };
  return (
    <ContrastContext.Provider
      value={{ contrast, setContrast, defaultContrast, resetContrast }}
    >
      {children}
    </ContrastContext.Provider>
  );
};
