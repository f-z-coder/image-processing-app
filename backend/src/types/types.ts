export interface Crop {
  x: number;
  y: number;
  width: number;
  height: number;
  renderWidth: number;
  renderHeight: number;
}

export type Operation =
  | "brightness"
  | "contrast"
  | "saturation"
  | "rotation"
  | "crop"
  | "convert";

type ImageFormat = "jpeg" | "png";

export type OperationValue = {
  brightness: number;
  contrast: number;
  saturation: number;
  rotation: number;
  crop: Crop;
  convert: ImageFormat;
};

export type Operations = {
  [K in Operation]?: OperationValue[K];
};
