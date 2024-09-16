import { axiosInstance } from "@/api/axios-instance";
import { Operations } from "@/api/image-processing-preview/process-multiple-image-operation";

export const downloadImage = async (
  filePath: string,
  operations: Operations,
): Promise<string> => {
  try {
    const endpoint = "/image-management/download";
    const params = { filePath, operations };
    const response = await axiosInstance.post(endpoint, params, {
      responseType: "arraybuffer",
    });
    const contentType = response.headers["content-type"];
    const blob = new Blob([response.data], { type: contentType });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Download failed:", error);
    throw error;
  }
};
