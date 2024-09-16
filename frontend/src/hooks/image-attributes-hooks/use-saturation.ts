import { SaturationContext } from "@/contexts/saturation-context";
import { useGenericContext } from "@/hooks/use-generic-context";

export const useSaturation = () =>
  useGenericContext(SaturationContext, "Saturation");
