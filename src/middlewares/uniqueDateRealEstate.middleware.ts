import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { AppError } from "../errors";
import { scheduleRepository } from "../repositories";

export const uniqueDateRealEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    console.log(req.body)
    const dateHour = {
        date: req.body.date,
        hour: req.body.hour
    }
    const realEstateId:number = Number(req.body.realEstateId)
  const foundSchedule: Schedule | null = await scheduleRepository.findOne({where:{
    ...dateHour,
    realEstate: {id: realEstateId}
  }});
  console.log(foundSchedule)
  if (foundSchedule) throw new AppError("Schedule for Real Estate already exists", 409);

  return next();
};