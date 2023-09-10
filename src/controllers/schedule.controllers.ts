import { Request, Response } from "express";
import { scheduleServices } from "../services";

const createSchedule = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(res.locals.decoded.sub);
  const realEstateId: number = Number(req.body.realEstateId);

  await scheduleServices.createSchedule(req.body, userId, realEstateId);
  return res.status(201).json({ message: "Schedule created" });
};

const retrieveRealEstateSchedule = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const schedule = await scheduleServices.retrieveRealEstateSchedule(id);

  return res.status(200).json(schedule);
};

export default { createSchedule, retrieveRealEstateSchedule };
