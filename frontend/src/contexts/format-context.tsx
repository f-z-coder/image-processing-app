import { createContext, useState, PropsWithChildren, FC } from "react";

type Format = "jpeg" | "png" | undefined;
type FormatContextType = {
  defaultFormat: Format;
  format: Format;
  setFormat: (format: Format) => void;
  isConverted: boolean;
  setIsConverted: (isConverted: boolean) => void;
  resetFormat: () => void;
};

export const FormatContext = createContext<FormatContextType | undefined>(
  undefined,
);

const defaultFormat: Format = undefined;

export const FormatProvider: FC<PropsWithChildren> = ({ children }) => {
  const [format, setFormat] = useState<Format>(defaultFormat);
  const [isConverted, setIsConverted] = useState(false);
  const resetFormat = () => {
    setFormat(defaultFormat);
    setIsConverted(false);
  };

  return (
    <FormatContext.Provider
      value={{
        format,
        setFormat,
        isConverted,
        setIsConverted,
        defaultFormat,
        resetFormat,
      }}
    >
      {children}
    </FormatContext.Provider>
  );
};
