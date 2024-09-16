import { useImage } from "@/hooks/image-attributes-hooks";
import { FC, FieldsetHTMLAttributes, ReactNode } from "react";

interface DisableControlsProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode;
}

export const DisableControls: FC<DisableControlsProps> = ({
  children,
  ...props
}) => {
  const { image } = useImage();
  return (
    <fieldset disabled={!image} {...props}>
      {children}
    </fieldset>
  );
};
