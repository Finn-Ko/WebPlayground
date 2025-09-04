import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["src/client/**", "**/node_modules/**", "**/dist/**"],
  },
});
