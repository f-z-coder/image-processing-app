import { useImageProcessing } from "@/hooks/useImageProcessing";
import { BaseControl } from "./BaseControl";
import { useContrast } from "@/hooks/image-attributes-hooks";
import { useIsControlDisabled } from "@/hooks/use-is-control-disabled";

export const ContrastControl: React.FC = () => {
  const { contrast, setContrast } = useContrast();
  const isControlDisabled = useIsControlDisabled();

  useImageProcessing("contrast", contrast);

  return (
    <BaseControl
      label="Contrast"
      value={contrast}
      onChange={setContrast}
      min={0}
      max={200}
      disabled={isControlDisabled}
    />
  );
};
