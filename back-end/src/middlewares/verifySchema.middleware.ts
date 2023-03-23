import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

export const verifySchemaMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.body = validated;

      return next();
    } catch (error) {
      return res.status(400).json({
        message: error.errors,
      });
    }
  };
