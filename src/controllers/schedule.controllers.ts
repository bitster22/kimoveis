import { Request, Response } from "express";
import { scheduleServices } from "../services";

const createSchedule = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(res.locals.decoded.sub);
    const realEstateId: number = Number(req.body.realEstateId);
    
    await scheduleServices.createSchedule(req.body, userId, realEstateId);
    return res.status(201).json({message: "Schedule created"});
  };
  
  export default { createSchedule };