import { useImageProcessing } from "@/hooks/useImageProcessing";
import { BaseControl } from "./BaseControl";
import { useRotation } from "@/hooks/image-attributes-hooks";
import { useIsControlDisabled } from "@/hooks/use-is-control-disabled";

export const RotationControl: React.FC = () => {
  const { rotation, setRotation } = useRotation();
  const isControlDisabled = useIsControlDisabled();
  useImageProcessing("rotation", rotation);

  return (
    <BaseControl
      label="Rotation"
      value={rotation}
      onChange={setRotation}
      min={0}
      max={360}
      disabled={isControlDisabled}
    />
  );
};
