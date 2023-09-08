import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router()

userRouter.post(
    "",
    middlewares.validateBody(userCreateSchema),
    middlewares.uniqueEmail,
    userControllers.createUser
);

userRouter.get("", 
middlewares.verifyToken,
middlewares.isAdmin,
userControllers.readUser)

userRouter.use("/:id", middlewares.idExists);

userRouter.delete("/:id",
middlewares.verifyToken,
middlewares.isAdmin, 
userControllers.destroyUser);

userRouter.patch(
    "/:id",
    middlewares.validateBody(userUpdateSchema),
    middlewares.verifyToken,
    middlewares.updateIsAdmin,
    userControllers.partialUpdateUser
)