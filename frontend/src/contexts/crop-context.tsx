import { createContext, useState, PropsWithChildren, FC } from "react";
import { Crop } from "react-image-crop";

type CropContextType = {
  defaultCrop: Crop;
  crop: Crop;
  setCrop: (crop: Crop) => void;
  isCropping: boolean;
  setIsCropping: (isCropping: boolean) => void;
  isCropped: boolean;
  setIsCropped: (isCropped: boolean) => void;
  resetCrop: () => void;
};

export const CropContext = createContext<CropContextType | undefined>(
  undefined,
);

const defaultCrop: Crop = {
  unit: "%",
  x: 25,
  y: 25,
  width: 50,
  height: 50,
};
export const CropProvider: FC<PropsWithChildren> = ({ children }) => {
  const [crop, setCrop] = useState<Crop>(defaultCrop);
  const [isCropped, setIsCropped] = useState(false);
  const [isCropping, setIsCropping] = useState(false);
  const resetCrop = () => {
    setCrop(defaultCrop);
    setIsCropped(false);
    setIsCropping(false);
  };

  return (
    <CropContext.Provider
      value={{
        defaultCrop,
        crop,
        setCrop,
        isCropped,
        setIsCropped,
        isCropping,
        setIsCropping,
        resetCrop,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};
