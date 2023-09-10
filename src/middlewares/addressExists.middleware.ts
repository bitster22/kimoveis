import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { AppError } from "../errors";
import { addressRepository } from "../repositories";

export const addressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const address: Address = { ...req.body.address };

  const foundAddress: Address | null = await addressRepository.findOne({
    where: {
      street: address.street,
      zipCode: address.zipCode,
      number: address.number,
      city: address.city,
      state: address.state,
    },
  });

  if (foundAddress) throw new AppError("Address already exists", 409);
  return next();
};
