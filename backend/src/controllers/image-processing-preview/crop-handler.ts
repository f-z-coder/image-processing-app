import { RequestHandler } from "express";
import {
  processSingleImageOperation,
  cropImage,
} from "@utilities/image-operations/index.js";
import { Crop } from "../../types/types.js";
import { IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE } from "@consts/image-processing-preview-consts.js";
type RequestParams = {};
type ResponseBody = Buffer;
type RequestBody = { filePath: string; crop: Crop };
type RequestQueryParams = {};

export const cropHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const { filePath, crop } = req.body;

  try {
    const buffer = await processSingleImageOperation(filePath, (image) =>
      cropImage(image, crop),
    );
    res.contentType("image/jpeg").send(buffer);
  } catch (error) {
    console.error(
      IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.CROPPING_FAILED,
      error,
    );
    next(new Error(IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.CROPPING_FAILED));
  }
};
