import { ImageProvider } from "@/contexts/image-context";
import { ImageEditor } from "@/components/image-editor";
import { FilePathProvider } from "@/contexts/file-path-context";
import { FormatProvider } from "@/contexts/format-context";
import { BrightnessProvider } from "@/contexts/brightness-context";
import { SaturationProvider } from "@/contexts/saturation-context";
import { ContrastProvider } from "@/contexts/contrast-context";
import { RotationProvider } from "@/contexts/rotation-context";
import { CropProvider } from "@/contexts/crop-context";
import { ProcessingModeProvider } from "@/contexts/processing-mode-context";

export const App = () => (
  <ImageProvider>
    <FilePathProvider>
      <FormatProvider>
        <ProcessingModeProvider>
          <BrightnessProvider>
            <SaturationProvider>
              <ContrastProvider>
                <RotationProvider>
                  <CropProvider>
                    <ImageEditor />
                  </CropProvider>
                </RotationProvider>
              </ContrastProvider>
            </SaturationProvider>
          </BrightnessProvider>
        </ProcessingModeProvider>
      </FormatProvider>
    </FilePathProvider>
  </ImageProvider>
);
