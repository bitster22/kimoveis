import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const updateIsAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const admin: boolean = res.locals.decoded.admin;
  const userId: number = Number(res.locals.decoded.sub);
  const paramId: number = Number(req.params.id);

  if (!admin){
    if(userId!==paramId){
        throw new AppError("Insufficient permission", 403)
    }
  }

  return next();
};