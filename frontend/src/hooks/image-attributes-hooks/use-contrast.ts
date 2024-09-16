import { ContrastContext } from "@/contexts/contrast-context";
import { useGenericContext } from "@/hooks/use-generic-context";

export const useContrast = () => useGenericContext(ContrastContext, "Contrast");
