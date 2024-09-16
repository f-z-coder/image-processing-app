import { axiosInstance } from "@/api/axios-instance";

import {
  Operation,
  OperationValue,
} from "@/api/image-processing-preview/process-single-image-operation";

export type Operations = {
  [K in Operation]?: OperationValue[K];
};

export const processMultipleImageOperation = async (
  filePath: string,
  operations: Operations,
): Promise<string> => {
  try {
    const endpoint = "/image-processing-preview/multiple-operations";
    const params = { filePath, operations };

    const response = await axiosInstance.post(endpoint, params, {
      responseType: "arraybuffer",
    });

    const contentType = response.headers["content-type"];
    const blob = new Blob([response.data], { type: contentType });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(`Multi-operation processing failed:`, error);
    throw error;
  }
};
