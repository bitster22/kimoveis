import { Router } from "express";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import { categoryControllers } from "../controllers";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(categoryCreateSchema),
  middlewares.uniqueCategory,
  categoryControllers.createCategory
);

categoryRouter.get("", categoryControllers.readCategory);

categoryRouter.get("/:id/realEstate", categoryControllers.retrieveRealEstateCategory);