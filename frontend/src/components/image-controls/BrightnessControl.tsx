import React from "react";
import { useImageProcessing } from "@/hooks/useImageProcessing";
import { BaseControl } from "./BaseControl";
import { useBrightness, useImage } from "@/hooks/image-attributes-hooks";

export const BrightnessControl: React.FC = () => {
  const { brightness, setBrightness } = useBrightness();
  const { image } = useImage();
  useImageProcessing("brightness", brightness);

  return (
    <BaseControl
      label="Brightness"
      value={brightness}
      onChange={setBrightness}
      min={0}
      max={200}
      disabled={!image}
    />
  );
};
