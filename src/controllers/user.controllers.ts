import { Request, Response } from "express";
import { userServices } from "../services";
import { UserRead, UserReturn } from "../interfaces";

const createUser =async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await userServices.createUser(req.body);
    return res.status(201).json(user);   
}

const readUser =async (req: Request, res: Response): Promise<Response> => {
     const users: UserRead = await userServices.readUser();
     return res.status(200).json(users);
}

const partialUpdateUser =async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { foundUser} = res.locals;
    const { body} = req;
    
    const user: UserReturn = await userServices.partialUpdateUser(foundUser, body);
    return res.status(200).json(user);
}

const destroyUser =async (req: Request, res: Response): Promise<Response> => {
    await userServices.destroyUser(res.locals.foundUser);
    return res.status(204).json();
}

export default { createUser, readUser, partialUpdateUser, destroyUser}