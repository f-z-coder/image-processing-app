import sharp from "sharp";

export const processSingleImageOperation = async (
  filePath: string,
  operation: (image: sharp.Sharp) => sharp.Sharp | Promise<sharp.Sharp>,
  format: "jpeg" | "png" = "jpeg",
): Promise<Buffer> => {
  try {
    const image = sharp(filePath);
    const processedImage = await operation(image);

    if (format === "png") {
      return await processedImage.png({ quality: 50 }).toBuffer();
    } else {
      return await processedImage.jpeg({ quality: 50 }).toBuffer();
    }
  } catch (error) {
    console.error("Image processing failed:", error);
    throw new Error("Image processing failed");
  }
};
