import { ErrorRequestHandler } from "express";

type RequestParams = {};
type ResponseBody = { error: string };
type RequestBody = {};
type RequestQueryParams = {};

const errorHandlerMiddleware: ErrorRequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQueryParams
> = (err, _req, res, _next) => {
  //Add your custom error handling logic here
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  }
};
export default errorHandlerMiddleware;
