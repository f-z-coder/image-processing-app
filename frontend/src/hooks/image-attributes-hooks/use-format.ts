import { FormatContext } from "@/contexts/format-context";
import { useGenericContext } from "@/hooks/use-generic-context";

export const useFormat = () => useGenericContext(FormatContext, "Format");
