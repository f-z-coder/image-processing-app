import { useImageProcessing } from "@/hooks/useImageProcessing";
import { BaseControl } from "./BaseControl";
import { useSaturation, useImage } from "@/hooks/image-attributes-hooks";

export const SaturationControl: React.FC = () => {
  const { saturation, setSaturation } = useSaturation();
  const { image } = useImage();

  useImageProcessing("saturation", saturation);

  return (
    <BaseControl
      label="Saturation"
      value={saturation}
      onChange={setSaturation}
      min={0}
      max={200}
      disabled={!image}
    />
  );
};
