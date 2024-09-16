import { useContext } from "react";

export const useGenericContext = <T>(
  Context: React.Context<T | undefined>,
  contextName: string,
) => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(
      `use${contextName} must be used within a ${contextName}Provider`,
    );
  }
  return context;
};
