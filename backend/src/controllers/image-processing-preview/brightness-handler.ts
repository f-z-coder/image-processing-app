import { RequestHandler } from "express";
import {
  processSingleImageOperation,
  adjustBrightness,
} from "@utilities/image-operations/index.js";
import { IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE } from "@consts/image-processing-preview-consts.js";

type RequestParams = {};
type ResponseBody = Buffer;
type RequestBody = { filePath: string; brightness: number };
type RequestQueryParams = {};

export const brightnessHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const { filePath, brightness } = req.body;

  try {
    const buffer = await processSingleImageOperation(filePath, (image) =>
      adjustBrightness(image, brightness),
    );
    res.contentType("image/jpeg").send(buffer);
  } catch (error) {
    console.error(
      IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.BRIGHTNESS_ADJUSTMENT_FAILED,
      error,
    );
    next(
      new Error(
        IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.BRIGHTNESS_ADJUSTMENT_FAILED,
      ),
    );
  }
};
