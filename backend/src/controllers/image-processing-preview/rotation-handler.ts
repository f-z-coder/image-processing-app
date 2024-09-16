import { RequestHandler } from "express";
import {
  processSingleImageOperation,
  rotateImage,
} from "@utilities/image-operations/index.js";
import { IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE } from "@consts/image-processing-preview-consts.js";

type RequestParams = {};
type ResponseBody = Buffer;
type RequestBody = { filePath: string; rotation: number };
type RequestQueryParams = {};

export const rotationHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const { filePath, rotation } = req.body;

  try {
    const buffer = await processSingleImageOperation(filePath, (image) =>
      rotateImage(image, rotation),
    );
    res.contentType("image/jpeg").send(buffer);
  } catch (error) {
    console.error(
      IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.ROTATION_FAILED,
      error,
    );
    next(new Error(IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.ROTATION_FAILED));
  }
};
