import express from "express";
import imageManagementRouter from "@routes/image-management-routes.js";
import imageProcessingPreviewRouter from "@routes/image-processing-preview-routes.js";
import { IMAGE_MANAGEMENT_BASE_URL } from "@consts/image-management-consts.js";
import { IMAGE_PROCESSING_PREVIEW_BASE_URL } from "@consts/image-processing-preview-consts.js";
import { ENV_CONST } from "@consts/env-const.js";
import { corsMiddleware, errorHandlerMiddleware } from "@middlewares/index.js";

const app = express();

// Use CORS middleware
app.use(corsMiddleware);

app.use(express.json());

//routes
app.use(IMAGE_MANAGEMENT_BASE_URL, imageManagementRouter);
app.use(IMAGE_PROCESSING_PREVIEW_BASE_URL, imageProcessingPreviewRouter);

// Error handling middleware should be the last one
app.use(errorHandlerMiddleware);

app.listen(ENV_CONST.PORT, () => {
  console.log("server started on port", ENV_CONST.PORT);
});
