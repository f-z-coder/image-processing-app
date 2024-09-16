import { createContext, useState, PropsWithChildren, FC } from "react";

type FilePathContextType = {
  filePath: string | null;
  setFilePath: (filePath: string) => void;
};

export const FilePathContext = createContext<FilePathContextType | undefined>(
  undefined,
);

export const FilePathProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filePath, setFilePath] = useState<string | null>(null);

  return (
    <FilePathContext.Provider value={{ filePath, setFilePath }}>
      {children}
    </FilePathContext.Provider>
  );
};
