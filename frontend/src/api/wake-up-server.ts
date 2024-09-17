import { axiosInstance } from "./axios-instance";

export const wakeUpServer = async (): Promise<void> => {
  try {
    const endpoint = "/wakeup";
    await axiosInstance.get(endpoint);
  } catch (error) {
    console.error("Failed to wake up server:", error);
    throw error;
  }
};
