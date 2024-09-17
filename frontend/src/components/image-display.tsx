import { FC } from "react";
import demoImage from "@/assets//demo-image.png";
import ReactCrop from "react-image-crop";
import { useCrop, useImage } from "@/hooks/image-attributes-hooks";

export const ImageDisplay: FC = () => {
  const { image, setHeight, setWidth } = useImage();
  const { isCropping, crop, setCrop } = useCrop();

  const imageClass = "object-contain h-full";

  if (!image) return <img src={demoImage} alt="Demo" className={imageClass} />;

  if (!isCropping)
    return <img src={image} alt="Processed" className={imageClass} />;

  return (
    <ReactCrop
      className="h-full [&>div:first-child]:h-full"
      crop={crop}
      onChange={(c) => setCrop(c)}
      ruleOfThirds
    >
      <img
        src={image}
        alt="Crop preview"
        className={imageClass}
        onLoad={(e) => {
          setWidth(e.currentTarget.width);
          setHeight(e.currentTarget.height);
        }}
      />
    </ReactCrop>
  );
};
