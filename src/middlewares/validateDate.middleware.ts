import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const validateDate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const dateSchedule = new Date(
    req.body.date.replaceAll("/", "-") + "T" + req.body.hour
  );

  if (dateSchedule.getHours() < 8 || dateSchedule.getHours() > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if (dateSchedule.getDay() === 0 || dateSchedule.getDay() === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  return next();
};
