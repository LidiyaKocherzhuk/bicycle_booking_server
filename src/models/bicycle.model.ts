import { model, Schema } from "mongoose";

import { EStatus } from "../enums";
import { IBicycle } from "../types";

const bicycleSchema = new Schema(
  {
    ID: {
      type: String,
      required: true,
      unique: true,
      min: 5,
    },
    name: {
      type: String,
      required: true,
      min: 5,
    },
    type: {
      type: String,
      required: true,
      min: 5,
    },
    color: {
      type: String,
      required: true,
      min: 5,
    },
    wheelSize: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      min: 5,
    },
    status: {
      type: String,
      enum: EStatus,
      default: "Available",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Bicycle = model<IBicycle>(" bicycle", bicycleSchema);
