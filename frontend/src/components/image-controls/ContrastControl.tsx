import { useImageProcessing } from "@/hooks/useImageProcessing";
import { BaseControl } from "./BaseControl";
import { useContrast, useImage } from "@/hooks/image-attributes-hooks";

export const ContrastControl: React.FC = () => {
  const { contrast, setContrast } = useContrast();
  const { image } = useImage();

  useImageProcessing("contrast", contrast);

  return (
    <BaseControl
      label="Contrast"
      value={contrast}
      onChange={setContrast}
      min={0}
      max={200}
      disabled={!image}
    />
  );
};
