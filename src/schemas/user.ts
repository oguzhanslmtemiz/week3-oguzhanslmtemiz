import Joi, { ObjectSchema } from "joi";

const loginSchema: ObjectSchema = Joi.object({
  username: Joi.string().alphanum().required().min(3),
  password: Joi.string().required().min(8),
});

const registerSchema: ObjectSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string(),
  username: Joi.string().alphanum().required().min(3),
  password: Joi.string().required().min(8),
});

export { loginSchema, registerSchema };
