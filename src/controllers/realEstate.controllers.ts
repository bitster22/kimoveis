import { Request, Response } from "express";
import { realEstateServices } from "../services";

const createRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const valueString = req.body.value.toString();
  const realEstate = await realEstateServices.createRealEstate({
    ...req.body,
    valueString,
  });

  return res.status(201).json(realEstate);
};

const readRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate = await realEstateServices.readRealEstate();
  return res.status(200).json(realEstate);
};

export default { createRealEstate, readRealEstate };
