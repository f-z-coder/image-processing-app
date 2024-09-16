import { RotationContext } from "@/contexts/rotation-context";
import { useGenericContext } from "@/hooks/use-generic-context";

export const useRotation = () => useGenericContext(RotationContext, "Rotation");
