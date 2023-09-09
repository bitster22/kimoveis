import { Router } from "express";
import middlewares from "../middlewares";
import { realEstateControllers } from "../controllers";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
    "",
    realEstateControllers.createRealEstate
)