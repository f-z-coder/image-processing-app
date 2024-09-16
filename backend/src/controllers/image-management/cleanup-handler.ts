import {
  IMAGE_MANAGEMENT_ERROR_MESSAGE,
  IMAGE_MANAGEMENT_SUCCESS_MESSAGE,
} from "@consts/image-management-consts.js";
import { RequestHandler } from "express";
import { promises as fs } from "fs";

type RequestParams = {};
type ResponseBody = { message: string };
type RequestBody = { filePath: string };
type RequestQueryParams = {};

export const cleanupHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = async (req, res, next) => {
  const { filePath } = req.body;

  try {
    await fs.unlink(filePath);
    res.json({ message: IMAGE_MANAGEMENT_SUCCESS_MESSAGE.FILE_DELETED });
  } catch (error) {
    console.error(IMAGE_MANAGEMENT_ERROR_MESSAGE.FILE_DELETION_FAILED, error);
    next(new Error(IMAGE_MANAGEMENT_ERROR_MESSAGE.FILE_DELETION_FAILED));
  }
};
