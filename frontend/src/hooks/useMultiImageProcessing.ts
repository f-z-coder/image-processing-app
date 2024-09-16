import { useEffect, useRef } from "react";
import { processMultipleImageOperation } from "@/api/image-processing-preview";
import {
  useCrop,
  useFilePath,
  useFormat,
  useGetImageAttributes,
  useImage,
} from "@/hooks/image-attributes-hooks";

import { useProcessingMode } from "@/hooks/use-processing-mode";
import { createCropWithRenderSize } from "@/utils/crop-utils";

export const useMultiImageProcessing = () => {
  const { filePath } = useFilePath();
  const { setImage, width, height } = useImage();
  const { processingMode } = useProcessingMode();
  const operations = useGetImageAttributes();
  const { crop, isCropped } = useCrop();
  const { format, isConverted } = useFormat();
  const prevOperationsRef = useRef<string>(JSON.stringify(operations));

  useEffect(() => {
    if (
      !filePath ||
      processingMode === "single" ||
      JSON.stringify(operations) === prevOperationsRef.current
    )
      return;

    const timeoutId = setTimeout(async () => {
      try {
        const imageUrl = await processMultipleImageOperation(filePath, {
          ...operations,
          ...(isCropped && {
            crop: createCropWithRenderSize(crop, width, height),
          }),
          ...(isConverted && { convert: format }),
        });
        setImage(imageUrl);
        prevOperationsRef.current = JSON.stringify(operations);
      } catch (error) {
        console.error("Multi-operation processing failed:", error);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [
    crop,
    filePath,
    format,
    isConverted,
    isCropped,
    operations,
    processingMode,
    setImage,
    width,
    height,
  ]);
};
