import { Sharp } from "sharp";
import { Crop } from "../../types/types.js";

export const cropImage = async (image: Sharp, crop: Crop) => {
  const metadata = await image.metadata();
  const originalWidth = metadata.width || 1;
  const originalHeight = metadata.height || 1;

  const scaleX = originalWidth / crop.renderWidth;
  const scaleY = originalHeight / crop.renderHeight;

  return image.extract({
    left: Math.round(crop.x * scaleX),
    top: Math.round(crop.y * scaleY),
    width: Math.round(crop.width * scaleX),
    height: Math.round(crop.height * scaleY),
  });
};
