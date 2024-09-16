import { Sharp } from "sharp";

export const rotateImage = (image: Sharp, value: number) => {
  return image.rotate(value, {
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  });
};
