import { Request, Response } from "express";
import { realEstateServices } from "../services";
import { addressCreate, realEstateCreate } from "../interfaces";

const createRealEstate =async (req: Request, res: Response): Promise<Response> => {
    const value: number = req.body.value;
    const sold: boolean = req.body.sold;
    const size: number = req.body.size;
    const address: addressCreate = req.body.address;
    const categoryId: number = Number(req.body.categoryId);
    const realEstate = await realEstateServices.createRealEstate({value, sold, size}, address, categoryId)
    
    return res.status(201).json(realEstate);
}

const readRealEstate =async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await realEstateServices.readRealEstate();
    return res.status(200).json(realEstate);
}

export default { createRealEstate, readRealEstate}