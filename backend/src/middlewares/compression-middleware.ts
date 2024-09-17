import compression from "compression";

export const compressionMiddleware = compression({
  level: 5,
  filter: () => true, // Force compression for all responses
  threshold: 0, // Compress all sizes
});
