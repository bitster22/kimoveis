import { Router } from "express";
import middlewares from "../middlewares";
import { realEstateControllers } from "../controllers";
import { realEstateCreateSchema } from "../schemas";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(realEstateCreateSchema),
  middlewares.addressExists,
  realEstateControllers.createRealEstate
);

realEstateRouter.get("", realEstateControllers.readRealEstate);
