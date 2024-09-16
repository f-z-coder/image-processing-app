import { ImageConverter } from "./image-converter";
import { Card, CardContent } from "@/components/ui/card";
import { ImageUploader } from "@/components/image-uploader";
import { ImageDisplay } from "@/components/image-display";
import { ImageControls } from "@/components/image-controls";
import { DownloadButtons } from "@/components/download-buttons";
import { ImageCropper } from "@/components/image-cropper";
import { ProcessingModeToggle } from "@/components/processing-mode-toggle";
import { DisableControls } from "@/components/disable-controls";

export const ImageEditor: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen-md h-dvh mx-auto p-8">
      <Card className="w-full h-full flex flex-col">
        <CardContent className="w-full h-full flex flex-col  gap-4 p-6 flex-grow">
          <div className="flex justify-center items-center min-h-0">
            <ImageDisplay />
          </div>
          <ImageUploader />
          <DisableControls className="flex flex-col gap-4 flex-grow">
            <ProcessingModeToggle />
            <ImageCropper />
            <ImageConverter />
            <ImageControls />
            <DownloadButtons />
          </DisableControls>
        </CardContent>
      </Card>
    </div>
  );
};
