import { RequestHandler } from "express";
import { processMultipleImageOperations } from "@utilities/image-operations/index.js";
import { Operations } from "types/types.js";
import { IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE } from "@consts/image-processing-preview-consts.js";

type RequestParams = {};
type ResponseBody = Buffer;
type RequestBody = { filePath: string; operations: Operations };
type RequestQueryParams = {};

export const multipleOperationsHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const { filePath, operations } = req.body;

  try {
    const buffer = await processMultipleImageOperations(filePath, operations);
    const format = operations.convert === "png" ? "png" : "jpeg";
    res.contentType(`image/${format}`).send(buffer);
  } catch (error) {
    console.error(
      IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.MULTIPLE_OPERATIONS_FAILED,
      error,
    );
    next(
      new Error(
        IMAGE_PROCESSING_PREVIEW_ERROR_MESSAGE.MULTIPLE_OPERATIONS_FAILED,
      ),
    );
  }
};
