import {
  useBrightness,
  useContrast,
  useCrop,
  useFormat,
  useImage,
  useRotation,
  useSaturation,
} from "@/hooks/image-attributes-hooks";

export const useGetReset = () => {
  const { resetImage } = useImage();
  const { resetBrightness } = useBrightness();
  const { resetContrast } = useContrast();
  const { resetSaturation } = useSaturation();
  const { resetRotation } = useRotation();
  const { resetCrop } = useCrop();
  const { resetFormat } = useFormat();

  const reset = () => {
    resetImage();
    resetBrightness();
    resetContrast();
    resetSaturation();
    resetRotation();
    resetCrop();
    resetFormat();
  };

  return { reset };
};
