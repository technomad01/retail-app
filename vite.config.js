import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// dotenv.config({ path: "./client/src/.env" });

export default defineConfig({
//   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
//   "process.env.MY_ENV": JSON.stringify(process.env.MY_ENV),
  env: {
    NODE_ENV: process.env.NODE_ENV,
    MY_ENV: process.env.MY_ENV,
  },
  plugins: [react()],
});
