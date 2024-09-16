import { Sharp } from "sharp";

export const adjustSaturation = (image: Sharp, value: number) => {
  return image.modulate({ saturation: value / 100 });
};
