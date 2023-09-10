import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { AppError } from "../errors";
import { scheduleRepository } from "../repositories";

export const uniqueDateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    const dateHour = {
        date: req.body.date,
        hour: req.body.hour
    }
    const userId: number = Number(res.locals.decoded.sub);
  const foundSchedule: Schedule | null = await scheduleRepository.findOne({where:{
    ...dateHour,
    user: {id: userId}
  }});
  if (foundSchedule) throw new AppError("User schedule to this real estate at this date and time already exists", 409);

  return next();
};