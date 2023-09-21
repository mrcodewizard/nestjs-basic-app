import * as joi from "joi";

export const userSchema  = joi.object({
   username: joi.string().min(6).required(),
   password: joi.string().min(6).required()
});