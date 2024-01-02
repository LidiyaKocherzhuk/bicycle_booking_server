import { config } from "dotenv";

config();

export const configs = {
  PORT: process.env.PORT || 5001,
  DB_URI: process.env.DB_URI || "mongodb://localhost:27017",
  FRONTEND_HOST: process.env.FRONTEND_HOST,
};
