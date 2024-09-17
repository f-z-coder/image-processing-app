import React from "react";
import { useImageProcessing } from "@/hooks/useImageProcessing";
import { BaseControl } from "./BaseControl";
import { useBrightness } from "@/hooks/image-attributes-hooks";
import { useIsControlDisabled } from "@/hooks/use-is-control-disabled";

export const BrightnessControl: React.FC = () => {
  const { brightness, setBrightness } = useBrightness();
  const isControlDisabled = useIsControlDisabled();
  useImageProcessing("brightness", brightness);

  return (
    <BaseControl
      label="Brightness"
      value={brightness}
      onChange={setBrightness}
      min={0}
      max={200}
      disabled={isControlDisabled}
    />
  );
};
