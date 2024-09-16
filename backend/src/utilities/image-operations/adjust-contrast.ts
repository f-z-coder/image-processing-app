import { Sharp } from "sharp";

export const adjustContrast = (image: Sharp, value: number) => {
  return image.linear(value / 100, -((128 * value) / 100) + 128);
};
