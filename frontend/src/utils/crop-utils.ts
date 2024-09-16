import { Crop } from "react-image-crop";
import { CropWithRenderSize } from "@/api/image-processing-preview";

export const createCropWithRenderSize = (
  crop: Crop,
  width: number | undefined,
  height: number | undefined,
): CropWithRenderSize => {
  const { unit, ...cropWithOutUnit } = crop;
  return {
    ...cropWithOutUnit,
    renderWidth: width ?? 0,
    renderHeight: height ?? 0,
  };
};
