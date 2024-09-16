import { useImageProcessing } from "@/hooks/useImageProcessing";
import { BaseControl } from "./BaseControl";
import { useRotation, useImage } from "@/hooks/image-attributes-hooks";

export const RotationControl: React.FC = () => {
  const { rotation, setRotation } = useRotation();
  const { image } = useImage();

  useImageProcessing("rotation", rotation);

  return (
    <BaseControl
      label="Rotation"
      value={rotation}
      onChange={setRotation}
      min={0}
      max={360}
      disabled={!image}
    />
  );
};
