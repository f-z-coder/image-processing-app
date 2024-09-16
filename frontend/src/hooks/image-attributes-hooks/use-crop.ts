import { CropContext } from "@/contexts/crop-context";
import { useGenericContext } from "@/hooks/use-generic-context";

export const useCrop = () => useGenericContext(CropContext, "Crop");
