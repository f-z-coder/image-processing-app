import { Router } from "express";
import {
  brightnessHandler,
  contrastHandler,
  saturationHandler,
  rotationHandler,
  convertHandler,
  cropHandler,
  multipleOperationsHandler,
} from "@controllers/image-processing-preview/index.js";

import {
  BRIGHTNESS_ENDPOINT,
  CONTRAST_ENDPOINT,
  SATURATION_ENDPOINT,
  ROTATION_ENDPOINT,
  CONVERT_ENDPOINT,
  CROP_ENDPOINT,
  MULTIPLE_OPERATIONS_ENDPOINT,
} from "@consts/image-processing-preview-consts.js";

const imageProcessingPreviewRouter = Router();

// Endpoint routes for /api/v1/image-processing-preview
imageProcessingPreviewRouter.post(BRIGHTNESS_ENDPOINT, brightnessHandler);
imageProcessingPreviewRouter.post(CONTRAST_ENDPOINT, contrastHandler);
imageProcessingPreviewRouter.post(SATURATION_ENDPOINT, saturationHandler);
imageProcessingPreviewRouter.post(ROTATION_ENDPOINT, rotationHandler);
imageProcessingPreviewRouter.post(CONVERT_ENDPOINT, convertHandler);
imageProcessingPreviewRouter.post(CROP_ENDPOINT, cropHandler);
imageProcessingPreviewRouter.post(
  MULTIPLE_OPERATIONS_ENDPOINT,
  multipleOperationsHandler,
);

export default imageProcessingPreviewRouter;
