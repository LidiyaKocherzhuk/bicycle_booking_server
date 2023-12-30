import { Document } from "mongoose";

import { EStatus } from "../enums";

export interface IBicycle extends Document {
  ID: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
  status: EStatus;
}

export interface IBicycleData {
  ID: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  description: string;
}
