import { NextFunction, Request, Response } from "express";

import { bicycleRepository } from "../repositories";

class BicycleController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const createdBicycle = await bicycleRepository.create(req.body);
      console.log(createdBicycle);
    } catch (e) {
      next(e);
    }
  }
}

export const bicycleController = new BicycleController();
