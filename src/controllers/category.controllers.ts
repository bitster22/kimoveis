import { Request, Response } from "express";
import { Category } from "../entities";
import { categoryServices } from "../services";
import { CategoryRead } from "../interfaces";

const createCategory = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoryServices.createCategory(req.body);
  return res.status(201).json(category);
};

const readCategory =async (req: Request, res: Response): Promise<Response> => {
    const categories: CategoryRead = await categoryServices.readCategory();
    return res.status(200).json(categories);
}

export default { createCategory, readCategory };