import { Sharp } from "sharp";

export const adjustBrightness = (image: Sharp, value: number) => {
  return image.modulate({ brightness: value / 100 });
};
