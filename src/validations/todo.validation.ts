import * as joi from "joi";

export const todoSchema  = joi.object({
   id: joi.number().required(),
   info: joi.string().min(6).required()
});