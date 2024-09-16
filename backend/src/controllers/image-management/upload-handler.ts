import { RequestHandler } from "express";

type RequestParams = {};
type ResponseBody = { filePath: string } | { error: string };
type RequestBody = {};
type RequestQueryParams = {};

export const uploadHandler: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ error: "No file uploaded or invalid file type" });
  }
  res.json({ filePath: req.file.path });
};
