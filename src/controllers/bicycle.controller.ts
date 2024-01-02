import { NextFunction, Request, Response } from "express";

import { bicycleRepository } from "../repositories";
import { IBicycle } from "../types";

class BicycleController {
  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IBicycle>> {
    try {
      const createdBicycle = await bicycleRepository.create(req.body);
      return res.status(201).json(createdBicycle);
    } catch (e) {
      next(e);
    }
  }

  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IBicycle[]>> {
    try {
      const bicycles = await bicycleRepository.getAll();
      return res.status(200).json(bicycles);
    } catch (e) {
      next(e);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      await bicycleRepository.update(req.params.id, req.body);
      const bicycles = await bicycleRepository.getAll();
      return res.status(200).json(bicycles);
    } catch (e) {
      next(e);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<void>> {
    try {
      await bicycleRepository.delete(req.params.id);
      return res.status(200);
    } catch (e) {
      next(e);
    }
  }
}

export const bicycleController = new BicycleController();
