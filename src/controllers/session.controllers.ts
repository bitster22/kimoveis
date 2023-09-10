import { Request, Response } from "express";
import { SessionReturn } from "../interfaces";
import { sessionServices } from "../services";

const createSession = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: SessionReturn = await sessionServices.createSession(req.body);
  return res.status(200).json(token);
};

export default { createSession };
