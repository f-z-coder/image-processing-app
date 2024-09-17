import { useState, FC } from "react";
import { Button } from "@/components/ui/button";
import { uploadImage } from "@/api/image-management";
import {
  useFilePath,
  useFormat,
  useImage,
} from "@/hooks/image-attributes-hooks";

export const ImageUploader: FC = () => {
  const { image, setImage } = useImage();
  const { setFormat } = useFormat();
  const { setFilePath } = useFilePath();
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        setError("Only JPEG and PNG files are allowed.");
        return;
      }

      try {
        setIsUploading(true);
        const filePath = await uploadImage(file);
        setFilePath(filePath);
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        setFormat(file.type === "image/png" ? "png" : "jpeg");
      } catch (error) {
        console.error("Upload failed:", error);
        if (error instanceof Error) {
          setError(`Upload failed. Please try again. ${error.message}`);
        } else {
          setError("Upload failed. Please try again.");
        }
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <>
      <Button
        disabled={isUploading}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {isUploading
          ? "Uploading..."
          : !image
            ? "Upload Image"
            : "Upload New Image"}
      </Button>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileUpload}
        accept="image/png, image/jpeg"
        className="hidden"
      />
      {error && <p className="text-destructive mt-2">{error}</p>}
    </>
  );
};
