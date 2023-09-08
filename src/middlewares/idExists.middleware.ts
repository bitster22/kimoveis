import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepository } from "../repositories";

export const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundUser: User | null = await userRepository.findOneBy({ id });
  if (!foundUser) throw new Error("User not found");

  res.locals = { ...res.locals, foundUser };

  return next();
};