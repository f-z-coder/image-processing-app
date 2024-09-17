import { useIsControlDisabled } from "@/hooks/use-is-control-disabled";
import { FC, FieldsetHTMLAttributes, ReactNode } from "react";

interface DisableControlsProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode;
}

export const DisableControls: FC<DisableControlsProps> = ({
  children,
  ...props
}) => {
  const isControlDisabled = useIsControlDisabled();
  return (
    <fieldset disabled={isControlDisabled} {...props}>
      {children}
    </fieldset>
  );
};
