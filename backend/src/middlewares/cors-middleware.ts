import cors from "cors";
import { ENV_CONST } from "@consts/env-const.js";

export const corsMiddleware = cors({
  origin: ENV_CONST.FRONTEND_HOST_URL,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
  allowedHeaders: "*",
  optionsSuccessStatus: 204,
});
