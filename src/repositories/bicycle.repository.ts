import { FilterQuery } from "mongoose";

import { Bicycle } from "../models";
import { IBicycle, IBicycleData } from "../types";

class BicycleRepository {
  public create(data: IBicycleData): Promise<IBicycle> {
    return Bicycle.create(data);
  }

  public getAll(): Promise<IBicycle[]> {
    return Bicycle.find();
  }

  public getOne(params: FilterQuery<IBicycle>) {
    return Bicycle.findOne(params);
  }

  public update(id: string, params: FilterQuery<IBicycle>) {
    return Bicycle.updateOne({ _id: id }, params);
  }

  public delete(id: string) {
    return Bicycle.deleteOne({ _id: id });
  }
}

export const bicycleRepository = new BicycleRepository();
