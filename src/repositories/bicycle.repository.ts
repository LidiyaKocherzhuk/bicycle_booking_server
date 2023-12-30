import { Bicycle } from "../models";
import { IBicycleData } from "../types";

class BicycleRepository {
  public create(data: IBicycleData) {
    return Bicycle.create(data);
  }
}

export const bicycleRepository = new BicycleRepository();
