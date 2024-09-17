import express from "express";
import imageManagementRouter from "@routes/image-management-routes.js";
import imageProcessingPreviewRouter from "@routes/image-processing-preview-routes.js";
import { IMAGE_MANAGEMENT_BASE_URL } from "@consts/image-management-consts.js";
import { IMAGE_PROCESSING_PREVIEW_BASE_URL } from "@consts/image-processing-preview-consts.js";
import { ENV_CONST } from "@consts/env-const.js";
import {
  corsMiddleware,
  compressionMiddleware,
  errorHandlerMiddleware,
} from "@middlewares/index.js";

const app = express();

// Use CORS middleware
app.use(corsMiddleware);

// Use compression middleware
app.use(compressionMiddleware);

app.use(express.json());

//routes
app.use(IMAGE_MANAGEMENT_BASE_URL, imageManagementRouter);
app.use(IMAGE_PROCESSING_PREVIEW_BASE_URL, imageProcessingPreviewRouter);

// Wake-up route
// This route is used to keep the server active on platforms like Render,
// which may put the server to sleep after periods of inactivity.
// The frontend calls this route on initial load to ensure the server is awake.
app.get("/api/v1/wakeup", (req, res) => {
  res.status(200).json({ message: "Server is awake" });
});

// Error handling middleware should be the last one
app.use(errorHandlerMiddleware);

app.listen(ENV_CONST.PORT, () => {
  console.log("server started on port", ENV_CONST.PORT);
});
