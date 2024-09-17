import "react-image-crop/dist/ReactCrop.css";
import { Button } from "@/components/ui/button";
import {
  processMultipleImageOperation,
  processSingleImageOperation,
} from "@/api/image-processing-preview";
import {
  useCrop,
  useFilePath,
  useFormat,
  useGetImageAttributes,
  useImage,
} from "@/hooks/image-attributes-hooks";
import { useProcessingMode } from "@/hooks/use-processing-mode";
import { createCropWithRenderSize } from "@/utils/crop-utils";

export const ImageCropper: React.FC = () => {
  const { filePath } = useFilePath();
  const { processingMode } = useProcessingMode();
  const imageAttributes = useGetImageAttributes();
  const { format, isConverted } = useFormat();
  const {
    crop,
    setIsCropped,
    isCropping,
    setIsCropping,
    isCropProcessing,
    setIsCropProcessing,
  } = useCrop();
  const { setImage, width, height, originalImage } = useImage();

  const handleApplyCrop = async () => {
    if (!filePath || !crop) return;

    try {
      setIsCropProcessing(true);
      if (processingMode === "single") {
        const imageUrl = await processSingleImageOperation(
          filePath,
          "crop",
          createCropWithRenderSize(crop, width, height),
        );
        setImage(imageUrl);
        setIsCropped(true);
      } else {
        const imageUrl = await processMultipleImageOperation(filePath, {
          ...imageAttributes,
          ...(isConverted && { convert: format }),
          crop: createCropWithRenderSize(crop, width, height),
        });
        setImage(imageUrl);
        setIsCropped(true);
      }
    } catch (error) {
      console.error("Cropping failed:", error);
    } finally {
      setIsCropping(false);
      setIsCropProcessing(false);
    }
  };

  const handleCrop = () => {
    setIsCropping(true);
    if (originalImage) {
      setImage(originalImage);
    }
  };

  const handleCancelCrop = () => {
    setIsCropping(false);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      {!isCropping ? (
        <Button onClick={handleCrop}>Crop Image</Button>
      ) : (
        <>
          <Button onClick={handleApplyCrop}>
            {isCropProcessing ? "Cropping..." : "Apply Crop"}
          </Button>
          <Button onClick={handleCancelCrop}>Cancel Crop</Button>
        </>
      )}
    </div>
  );
};
