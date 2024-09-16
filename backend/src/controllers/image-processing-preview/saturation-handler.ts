import { RequestHandler } from "express";
import {
  processSingleImageOperation,
  adjustSaturation,
} from "@utilities/image-operations/index.js";
import { IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE } from "@consts/image-processing-preview-consts.js";

type RequestParams = {};
type ResponseBody = Buffer;
type RequestBody = { filePath: string; saturation: number };
type RequestQueryParams = {};

export const saturationHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const { filePath, saturation } = req.body;

  try {
    const buffer = await processSingleImageOperation(filePath, (image) =>
      adjustSaturation(image, saturation),
    );
    res.contentType("image/jpeg").send(buffer);
  } catch (error) {
    console.error(
      IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.SATURATION_ADJUSTMENT_FAILED,
      error,
    );
    next(
      new Error(
        IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.SATURATION_ADJUSTMENT_FAILED,
      ),
    );
  }
};
