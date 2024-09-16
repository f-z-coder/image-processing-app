import { useBrightness } from "@/hooks/image-attributes-hooks/use-brightness";
import { useContrast } from "@/hooks/image-attributes-hooks/use-contrast";
import { useRotation } from "@/hooks/image-attributes-hooks/use-rotation";
import { useSaturation } from "@/hooks/image-attributes-hooks/use-saturation";

export const useGetImageAttributes = () => {
  const { brightness } = useBrightness();
  const { contrast } = useContrast();
  const { saturation } = useSaturation();
  const { rotation } = useRotation();
  return { brightness, contrast, saturation, rotation };
};
