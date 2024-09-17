import { createContext, useState, PropsWithChildren, FC } from "react";

type FilePathContextType = {
  filePath: string | null;
  setFilePath: (filePath: string) => void;
  isUploading: boolean;
  setIsUploading: (isUploading: boolean) => void;
};

export const FilePathContext = createContext<FilePathContextType | undefined>(
  undefined,
);

export const FilePathProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filePath, setFilePath] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  return (
    <FilePathContext.Provider
      value={{ filePath, setFilePath, isUploading, setIsUploading }}
    >
      {children}
    </FilePathContext.Provider>
  );
};
