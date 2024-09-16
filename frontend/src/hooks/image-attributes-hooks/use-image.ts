import { ImageContext } from "@/contexts/image-context";
import { useGenericContext } from "@/hooks/use-generic-context";

export const useImage = () => useGenericContext(ImageContext, "Image");
