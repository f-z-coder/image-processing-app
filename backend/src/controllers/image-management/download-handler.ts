import { RequestHandler } from "express";
import { processMultipleImageOperations } from "@utilities/image-operations/index.js";
import { Operations } from "../../types/types.js";
import { IMAGE_MANAGEMENT_ERROR_MESSAGE } from "@consts/image-management-consts.js";

type RequestParams = {};
type ResponseBody = Buffer;
type RequestBody = { filePath: string; operations: Operations };
type RequestQueryParams = {};

export const downloadHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const { filePath, operations } = req.body;

  try {
    const buffer = await processMultipleImageOperations(
      filePath,
      operations,
      100,
    );
    const format = operations.convert === "png" ? "png" : "jpeg";
    res.contentType(`image/${format}`).send(buffer);
  } catch (error) {
    console.error(IMAGE_MANAGEMENT_ERROR_MESSAGE.DOWNLOAD_FAILED, error);
    next(new Error(IMAGE_MANAGEMENT_ERROR_MESSAGE.DOWNLOAD_FAILED));
  }
};
