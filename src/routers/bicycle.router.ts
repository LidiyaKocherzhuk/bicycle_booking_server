import { Router } from "express";

import { bicycleController } from "../controllers";

export const bicycleRouter = Router();

bicycleRouter.post("", bicycleController.create);
