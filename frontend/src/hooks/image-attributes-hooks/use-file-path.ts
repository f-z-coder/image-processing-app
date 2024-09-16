import { FilePathContext } from "@/contexts/file-path-context";
import { useGenericContext } from "@/hooks/use-generic-context";

export const useFilePath = () => useGenericContext(FilePathContext, "FilePath");
