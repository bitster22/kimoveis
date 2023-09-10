import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { AppError } from "../errors";
import { realEstateRepository } from "../repositories";

export const idRealEstateExistsParams = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const realEstateId: number = Number(req.params.id);
  const foundRealEstate: RealEstate | null = await realEstateRepository.findOne(
    {
      where: {
        id: realEstateId,
      },
    }
  );
  if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

  return next();
};
