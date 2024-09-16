import { useBrightness } from "@/hooks/image-attributes-hooks/use-brightness";
import { useContrast } from "@/hooks/image-attributes-hooks/use-contrast";
import { useCrop } from "@/hooks/image-attributes-hooks/use-crop";
import { useFormat } from "@/hooks/image-attributes-hooks/use-format";
import { useRotation } from "@/hooks/image-attributes-hooks/use-rotation";
import { useSaturation } from "@/hooks/image-attributes-hooks/use-saturation";

export const useGetReset = () => {
  const { resetBrightness } = useBrightness();
  const { resetContrast } = useContrast();
  const { resetSaturation } = useSaturation();
  const { resetRotation } = useRotation();
  const { resetCrop } = useCrop();
  const { resetFormat } = useFormat();

  const reset = () => {
    resetBrightness();
    resetContrast();
    resetSaturation();
    resetRotation();
    resetCrop();
    resetFormat();
  };

  return { reset };
};
