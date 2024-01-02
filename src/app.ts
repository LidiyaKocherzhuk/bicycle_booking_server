import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs";
import { ApiError } from "./errors";
import { bicycleRouter } from "./routers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: configs.FRONTEND_HOST }));

app.use("/bicycle", bicycleRouter);

app.use((error: ApiError, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;

  res.status(status).json({
    message: error.message,
    status: error.status,
  });
});

const PORT = configs.PORT;

app.listen(PORT, async () => {
  await mongoose.connect(configs.DB_URI);
  console.log(`Server has started on port: ${PORT}`);
});
