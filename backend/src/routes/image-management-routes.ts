import { Router } from "express";
import { upload } from "@middlewares/multer-middleware.js";
import {
  uploadHandler,
  downloadHandler,
  cleanupHandler,
} from "@controllers/image-management/index.js";

import {
  UPLOAD_ENDPOINT,
  DOWNLOAD_ENDPOINT,
  CLEANUP_ENDPOINT,
} from "@consts/image-management-consts.js";

const imageManagementRouter = Router();

// Endpoint routes for /api/v1/image-management
imageManagementRouter.post(
  UPLOAD_ENDPOINT,
  upload.single("image"),
  uploadHandler,
);
imageManagementRouter.post(DOWNLOAD_ENDPOINT, downloadHandler);
imageManagementRouter.post(CLEANUP_ENDPOINT, cleanupHandler);

export default imageManagementRouter;
