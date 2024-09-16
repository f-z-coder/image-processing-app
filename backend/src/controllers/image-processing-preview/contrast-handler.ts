import { RequestHandler } from "express";
import {
  processSingleImageOperation,
  adjustContrast,
} from "@utilities/image-operations/index.js";
import { IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE } from "@consts/image-processing-preview-consts.js";

type RequestParams = {};
type ResponseBody = Buffer;
type RequestBody = { filePath: string; contrast: number };
type RequestQueryParams = {};

export const contrastHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const { filePath, contrast } = req.body;

  try {
    const buffer = await processSingleImageOperation(filePath, (image) =>
      adjustContrast(image, contrast),
    );
    res.contentType("image/jpeg").send(buffer);
  } catch (error) {
    console.error(
      IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.CONTRAST_ADJUSTMENT_FAILED,
      error,
    );
    next(
      new Error(
        IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.CONTRAST_ADJUSTMENT_FAILED,
      ),
    );
  }
};
