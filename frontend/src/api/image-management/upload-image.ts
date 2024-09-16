import { axiosInstance } from "../axios-instance";

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const endpoint = "/image-management/upload";
    const response = await axiosInstance.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.filePath;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
};
