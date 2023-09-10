import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepository } from "../repositories";
import { AppError } from "../errors";

export const idCategoryRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundCategoryRealEstate: Category | null =
    await categoryRepository.findOneBy({ id });
  if (!foundCategoryRealEstate) throw new AppError("Category not found", 404);

  return next();
};
