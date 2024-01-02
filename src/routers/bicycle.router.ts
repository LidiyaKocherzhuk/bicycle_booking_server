import { Router } from "express";

import { bicycleController } from "../controllers";
import { bicycleMiddleware } from "../middlewares";

export const bicycleRouter = Router();

bicycleRouter.post(
  "",
  bicycleMiddleware.isBodyValid,
  bicycleMiddleware.isIDUnique,
  bicycleController.create,
);

bicycleRouter.get("", bicycleController.getAll);

bicycleRouter.patch("/:id", bicycleController.update);

bicycleRouter.delete(
  "/:id",
  bicycleMiddleware.isIdValid,
  bicycleController.delete,
);
