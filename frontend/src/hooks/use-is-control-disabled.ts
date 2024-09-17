import { useCrop, useFilePath } from "@/hooks/image-attributes-hooks";

export const useIsControlDisabled = () => {
  const { isCropProcessing } = useCrop();
  const { isUploading, filePath } = useFilePath();
  return isCropProcessing || isUploading || !filePath;
};
