import { useEffect, useRef } from "react";

import {
  processSingleImageOperation,
  Operation,
} from "@/api/image-processing-preview";
import { useFilePath, useImage } from "@/hooks/image-attributes-hooks";
import { useProcessingMode } from "@/hooks/use-processing-mode";

export const useImageProcessing = (operation: Operation, value: number) => {
  const { filePath } = useFilePath();
  const { setImage } = useImage();
  const prevValueRef = useRef(value);
  const { processingMode } = useProcessingMode();
  useEffect(() => {
    if (
      !filePath ||
      processingMode === "multiple" ||
      value === prevValueRef.current
    )
      return;

    const timeoutId = setTimeout(async () => {
      try {
        const imageUrl = await processSingleImageOperation(
          filePath,
          operation,
          value,
        );
        setImage(imageUrl);
        prevValueRef.current = value;
      } catch (error) {
        console.error("Processing failed:", error);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [filePath, operation, value, setImage, processingMode]);
};
