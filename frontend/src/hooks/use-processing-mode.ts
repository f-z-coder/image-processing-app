import { ProcessingModeContext } from "@/contexts/processing-mode-context";
import { useGenericContext } from "@/hooks/use-generic-context";

export const useProcessingMode = () =>
  useGenericContext(ProcessingModeContext, "ProcessingMode");
