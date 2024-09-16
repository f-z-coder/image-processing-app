import { BrightnessContext } from "@/contexts/brightness-context";
import { useGenericContext } from "@/hooks/use-generic-context";

export const useBrightness = () =>
  useGenericContext(BrightnessContext, "Brightness");
