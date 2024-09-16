import { axiosInstance } from "@/api/axios-instance";

export type Operation =
  | "brightness"
  | "contrast"
  | "saturation"
  | "rotation"
  | "crop"
  | "convert";

type ImageFormat = "jpeg" | "png";

export type CropWithRenderSize = {
  x: number;
  y: number;
  width: number;
  height: number;
  renderWidth: number;
  renderHeight: number;
};
export type OperationValue = {
  brightness: number;
  contrast: number;
  saturation: number;
  rotation: number;
  crop: CropWithRenderSize;
  convert: ImageFormat;
};

export const processSingleImageOperation = async <T extends Operation>(
  filePath: string,
  operation: T,
  value: OperationValue[T],
): Promise<string> => {
  try {
    const endpoint = `/image-processing-preview/${operation}`;
    const params = { filePath, [operation]: value };

    const response = await axiosInstance.post(endpoint, params, {
      responseType: "arraybuffer",
    });

    const contentType = response.headers["content-type"];
    const blob = new Blob([response.data], { type: contentType });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(`Image processing failed:`, error);
    throw error;
  }
};
