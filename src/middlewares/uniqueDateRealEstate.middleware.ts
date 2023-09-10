import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { AppError } from "../errors";
import { scheduleRepository } from "../repositories";

export const uniqueDateRealEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    const dateHour = {
        date: req.body.date,
        hour: req.body.hour
    }
    const realEstateId:number = Number(req.body.realEstateId)
  const foundSchedule: Schedule | null = await scheduleRepository.findOne({where:{
    ...dateHour,
    realEstate: {id: realEstateId}
  }});
  if (foundSchedule) throw new AppError("Schedule to this real estate at this date and time already exists", 409);

  return next();
};