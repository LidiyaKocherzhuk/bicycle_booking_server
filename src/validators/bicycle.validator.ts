import joi from "joi";

import { EStatus } from "../enums";

export class BicycleValidator {
  static ID = joi.string().min(5).trim();
  static type = joi.string().min(5).trim();
  static color = joi.string().min(5).trim();
  static wheelSize = joi.number();
  static price = joi.number();
  static description = joi.string().min(5).trim();
  static status = joi.valid(...Object.values(EStatus));

  static create = joi.object({
    ID: this.ID.required(),
    name: joi.string().min(5).trim().required(),
    type: this.type.required(),
    color: this.color.required(),
    wheelSize: this.wheelSize.required(),
    price: this.price.required(),
    description: this.description.required(),
  });

  static update = joi.object({
    status: this.status,
  });
}
