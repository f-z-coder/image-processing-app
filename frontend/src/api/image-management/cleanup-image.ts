import { axiosInstance } from "@/api/axios-instance";

export const cleanupImage = async (filePath: string): Promise<void> => {
  try {
    const endpoint = "/image-management/cleanup";
    const params = { filePath };
    await axiosInstance.post(endpoint, params);
  } catch (error) {
    console.error("Cleanup failed:", error);
    throw error;
  }
};
