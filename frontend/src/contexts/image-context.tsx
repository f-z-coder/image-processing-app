import { createContext, useState, PropsWithChildren, FC } from "react";

type ImageContextType = {
  image: string | undefined;
  setImage: (image: string) => void;
  width: number | undefined;
  height: number | undefined;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
};

export const ImageContext = createContext<ImageContextType | undefined>(
  undefined,
);

export const ImageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  return (
    <ImageContext.Provider
      value={{ image, setImage, width, height, setWidth, setHeight }}
    >
      {children}
    </ImageContext.Provider>
  );
};
