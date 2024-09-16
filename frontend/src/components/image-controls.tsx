import React from "react";
import { BrightnessControl } from "./image-controls/BrightnessControl";
import { ContrastControl } from "./image-controls/ContrastControl";
import { SaturationControl } from "./image-controls/SaturationControl";
import { RotationControl } from "@/components/image-controls/RotationControl";

export const ImageControls: React.FC = () => {
  return (
    <div>
      <BrightnessControl />
      <ContrastControl />
      <SaturationControl />
      <RotationControl />
    </div>
  );
};
