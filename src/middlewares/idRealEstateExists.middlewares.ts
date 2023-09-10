import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { AppError } from "../errors";
import { realEstateRepository } from "../repositories";

export const idRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    const realEstateId:number = Number(req.body.realEstateId)
    const foundRealEstate: RealEstate | null = await realEstateRepository.findOne({
        where: {
            id: realEstateId
        }
    })
  if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

  return next();
};