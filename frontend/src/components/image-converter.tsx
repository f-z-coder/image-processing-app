import React, { useState } from "react";
import { processSingleImageOperation } from "@/api/image-processing-preview";
import { Button } from "@/components/ui/button";
import {
  useImage,
  useFilePath,
  useFormat,
  useGetImageAttributes,
  useCrop,
} from "@/hooks/image-attributes-hooks";
import { useProcessingMode } from "@/hooks/use-processing-mode";
import { processMultipleImageOperation } from "@/api/image-processing-preview/process-multiple-image-operation";
import { createCropWithRenderSize } from "@/utils/crop-utils";

export const ImageConverter: React.FC = () => {
  const [isConverting, setIsConverting] = useState(false);
  const { setImage, width, height } = useImage();
  const { filePath } = useFilePath();
  const { format, setFormat, setIsConverted } = useFormat();
  const { processingMode } = useProcessingMode();
  const imageAttributes = useGetImageAttributes();
  const { crop, isCropped } = useCrop();
  const handleConvert = async () => {
    if (!filePath || !format) return;

    setIsConverting(true);
    try {
      if (processingMode === "single") {
        const targetFormat = format === "png" ? "jpeg" : "png";
        const imageUrl = await processSingleImageOperation(
          filePath,
          "convert",
          targetFormat,
        );
        setImage(imageUrl);
        setFormat(targetFormat);
        setIsConverted(true);
      } else {
        const targetFormat = format === "png" ? "jpeg" : "png";

        const imageUrl = await processMultipleImageOperation(filePath, {
          ...imageAttributes,
          ...(isCropped && {
            crop: createCropWithRenderSize(crop, width, height),
          }),
          convert: targetFormat,
        });
        setImage(imageUrl);
        setFormat(targetFormat);
        setIsConverted(true);
      }
    } catch (error) {
      console.error("Image conversion failed:", error);
    } finally {
      setIsConverting(false);
    }
  };

  const targetFormat = format === "png" ? "JPEG" : "PNG";

  return (
    <Button onClick={handleConvert} disabled={isConverting}>
      {isConverting ? "Converting..." : `Convert to ${targetFormat}`}
    </Button>
  );
};
