import { Sharp } from "sharp";

export const convertImage = (
  image: Sharp,
  format: "jpeg" | "png",
  quality: number,
) => {
  return format === "png"
    ? image.png({ quality: quality })
    : image.jpeg({ quality: quality });
};
