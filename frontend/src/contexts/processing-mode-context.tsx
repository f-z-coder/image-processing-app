import React, { createContext, useState } from "react";

type ProcessingMode = "single" | "multiple";

interface ProcessingModeContextType {
  processingMode: ProcessingMode;
  setProcessingMode: (mode: ProcessingMode) => void;
}

export const ProcessingModeContext = createContext<
  ProcessingModeContextType | undefined
>(undefined);

export const ProcessingModeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [processingMode, setProcessingMode] =
    useState<ProcessingMode>("single");

  return (
    <ProcessingModeContext.Provider
      value={{ processingMode, setProcessingMode }}
    >
      {children}
    </ProcessingModeContext.Provider>
  );
};
