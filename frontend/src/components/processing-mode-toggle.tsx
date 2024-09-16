import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useProcessingMode } from "@/hooks/use-processing-mode";
import { useMultiImageProcessing } from "@/hooks/useMultiImageProcessing";
import { useGetReset } from "@/hooks/image-attributes-hooks/use-get-reset";

export const ProcessingModeToggle: React.FC = () => {
  const { processingMode, setProcessingMode } = useProcessingMode();
  const { reset } = useGetReset();
  useMultiImageProcessing();

  const handleToggle = (checked: boolean) => {
    setProcessingMode(checked ? "multiple" : "single");
    reset();
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="processing-mode"
        checked={processingMode === "multiple"}
        onCheckedChange={handleToggle}
      />
      <Label htmlFor="processing-mode">
        {processingMode === "multiple" ? "Multi-operation" : "Single operation"}
      </Label>
    </div>
  );
};
