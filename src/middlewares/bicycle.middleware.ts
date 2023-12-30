import { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { ApiError } from "../errors";
import { bicycleRepository } from "../repositories";
import { IBicycleData } from "../types";
import { BicycleValidator } from "../validators";

class BicycleMiddleware {
  public isIdValid(req: Request, res: Response, next: NextFunction): void {
    try {
      const { id } = req.params;

      if (!mongoose.isObjectIdOrHexString(id)) {
        next(new ApiError("Not valid ID", 400));
      }

      next();
    } catch (e) {
      next(e);
    }
  }

  public isBodyValid(req: Request, res: Response, next: NextFunction): void {
    try {
      const { value, error } = BicycleValidator.create.validate(req.body);

      if (error) {
        next(new ApiError(error.message, 400));
      }

      req.body = value;
      next();
    } catch (e) {
      next(e);
    }
  }

  public async isIDUnique(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { ID } = req.body as IBicycleData;

      const bicycle = await bicycleRepository.getOne({ ID });

      if (bicycle) {
        next(new ApiError("Bicycle ID must be unique!", 400));
      }

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const bicycleMiddleware = new BicycleMiddleware();
