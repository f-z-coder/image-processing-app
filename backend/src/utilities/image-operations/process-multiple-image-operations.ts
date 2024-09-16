import sharp from "sharp";
import { Crop, Operations } from "../../types/types.js";
import {
  adjustBrightness,
  adjustContrast,
  adjustSaturation,
  rotateImage,
  cropImage,
  convertImage,
} from "./index.js";

export const processMultipleImageOperations = async (
  filePath: string,
  operations: Operations,
  quality: number = 50,
): Promise<Buffer> => {
  let image = sharp(filePath);

  for (const [operation, value] of Object.entries(operations)) {
    switch (operation) {
      case "brightness":
        image = adjustBrightness(image, value as number);
        break;
      case "contrast":
        image = adjustContrast(image, value as number);
        break;
      case "saturation":
        image = adjustSaturation(image, value as number);
        break;
      case "rotation":
        image = rotateImage(image, value as number);
        break;
      case "crop":
        image = await cropImage(image, value as Crop);
        break;
      case "convert":
        image = convertImage(image, value as "jpeg" | "png", quality);
        break;
    }
  }
  try {
    const processedImage = await image.toBuffer();
    return processedImage;
  } catch (error) {
    console.error("Image processing failed:", error);
    throw new Error("Image processing failed");
  }
};
