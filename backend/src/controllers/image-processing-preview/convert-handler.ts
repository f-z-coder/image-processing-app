import { RequestHandler } from "express";
import { processSingleImageOperation } from "@utilities/image-operations/index.js";
import { IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE } from "@consts/image-processing-preview-consts.js";

type RequestParams = {};
type ResponseBody = Buffer;
type RequestBody = { filePath: string; convert: "jpeg" | "png" };
type RequestQueryParams = {};

export const convertHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const { filePath, convert } = req.body;

  try {
    const buffer = await processSingleImageOperation(
      filePath,
      (image) => image,
      convert,
    );
    res.contentType(`image/${convert}`).send(buffer);
  } catch (error) {
    console.error(
      IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.CONVERSION_FAILED,
      error,
    );
    next(new Error(IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.CONVERSION_FAILED));
  }
};
