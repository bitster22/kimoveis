import { Router } from "express";
import middlewares from "../middlewares";
import { scheduleControllers } from "../controllers";

export const scheduleRouter: Router = Router();

scheduleRouter.post("",
middlewares.verifyToken,
middlewares.validateDate,
scheduleControllers.createSchedule);

scheduleRouter.get("/realEstate/:id",
scheduleControllers.retrieveRealEstateSchedule)