import express from "express";
import cors from "cors";
import imageManagementRouter from "@routes/image-management-routes.js";
import imageProcessingPreviewRouter from "@routes/image-processing-preview-routes.js";
import { IMAGE_MANAGEMENT_BASE_URL } from "@consts/image-management-consts.js";
import { IMAGE_PROCESSING_PREVIEW_BASE_URL } from "@consts/image-processing-preview-consts.js";
import { ENV_CONST } from "@consts/envConst.js";
import errorHandlerMiddleware from "@middlewares/errorHandlerMiddleware.js";

const app = express();
//cors policy
app.use(cors({ origin: ENV_CONST.FRONTEND_HOST_URL }));

app.use(express.json());

//routes
app.use(IMAGE_MANAGEMENT_BASE_URL, imageManagementRouter);
app.use(IMAGE_PROCESSING_PREVIEW_BASE_URL, imageProcessingPreviewRouter);

// Error handling middleware should be the last one
app.use(errorHandlerMiddleware);

app.listen(ENV_CONST.PORT, () => {
  console.log("server started on port", ENV_CONST.PORT);
});
