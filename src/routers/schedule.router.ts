import { Router } from "express";
import middlewares from "../middlewares";
import { scheduleControllers } from "../controllers";
import { scheduleCreateSchema } from "../schemas";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleCreateSchema),
  middlewares.idRealEstateExists,
  middlewares.validateDate,
  middlewares.uniqueDateRealEstate,
  middlewares.uniqueDateUser,
  scheduleControllers.createSchedule
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.idRealEstateExistsParams,
  scheduleControllers.retrieveRealEstateSchedule
);
