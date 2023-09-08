import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const validateDate = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const dateSchedule = new Date(req.body.date+"T"+req.body.hour);
    if(dateSchedule.getHours()>=8&&dateSchedule.getHours()<18||dateSchedule.getHours()===18&&dateSchedule.getMinutes()===0){
        if(dateSchedule.getDay()>=1&&dateSchedule.getDay()<=5){
            return next()
        }else{
            throw new AppError("Invalid date, work days are monday to friday", 400)
        }
    }else{
        throw new AppError("Invalid hour, avaliable times are 8AM to 18AM", 400);
    }
  };