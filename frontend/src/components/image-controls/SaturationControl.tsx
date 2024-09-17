import { useImageProcessing } from "@/hooks/useImageProcessing";
import { BaseControl } from "./BaseControl";
import { useSaturation } from "@/hooks/image-attributes-hooks";
import { useIsControlDisabled } from "@/hooks/use-is-control-disabled";

export const SaturationControl: React.FC = () => {
  const { saturation, setSaturation } = useSaturation();
  const isControlDisabled = useIsControlDisabled();

  useImageProcessing("saturation", saturation);

  return (
    <BaseControl
      label="Saturation"
      value={saturation}
      onChange={setSaturation}
      min={0}
      max={200}
      disabled={isControlDisabled}
    />
  );
};
