import React from "react";
import { Button } from "@/components/ui/button";
import { downloadImage } from "@/api/image-management";
import { useCrop, useFilePath, useImage } from "@/hooks/image-attributes-hooks";
import { useGetImageAttributes } from "@/hooks/image-attributes-hooks";
import { createCropWithRenderSize } from "@/utils/crop-utils";

export const DownloadButtons: React.FC = () => {
  const { filePath } = useFilePath();
  const operations = useGetImageAttributes();
  const { crop, isCropped } = useCrop();
  const { width, height } = useImage();
  const handleDownload = async (format: "jpeg" | "png") => {
    if (filePath) {
      try {
        const imageUrl = await downloadImage(filePath, {
          ...operations,
          ...(isCropped && {
            crop: createCropWithRenderSize(crop, width, height),
          }),
          convert: format,
        });
        const link = document.createElement("a");
        link.href = imageUrl;
        link.setAttribute("download", `processed-image.${format}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(imageUrl);
      } catch (error) {
        console.error("Download failed:", error);
      }
    }
  };

  return (
    <div className="flex justify-between">
      <Button onClick={() => handleDownload("jpeg")}>Download JPEG</Button>
      <Button onClick={() => handleDownload("png")}>Download PNG</Button>
    </div>
  );
};
