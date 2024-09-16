import dotenv from "dotenv";
dotenv.config();

export const ENV_CONST = {
  PORT: Number(process.env.PORT) || 8080,
  FRONTEND_HOST_URL: process.env.FRONTEND_HOST_URL || "http://localhost:5173",
  BACKEND_HOST_URL: process.env.BACKEND_HOST_URL || "http://localhost:8080",
} as const;
