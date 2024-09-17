import compression from "compression";

export const compressionMiddleware = compression({ level: 5 });
