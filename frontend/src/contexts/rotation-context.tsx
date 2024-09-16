import { createContext, useState, PropsWithChildren, FC } from "react";

type RotationContextType = {
  rotation: number;
  setRotation: (rotation: number) => void;
  defaultRotation: number;
  resetRotation: () => void;
};

export const RotationContext = createContext<RotationContextType | undefined>(
  undefined,
);

const defaultRotation = 0;

export const RotationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [rotation, setRotation] = useState(defaultRotation);
  const resetRotation = () => {
    setRotation(defaultRotation);
  };
  return (
    <RotationContext.Provider
      value={{ rotation, setRotation, defaultRotation, resetRotation }}
    >
      {children}
    </RotationContext.Provider>
  );
};
