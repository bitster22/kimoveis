import { Request, Response } from "express";
import { realEstateServices } from "../services";
import { addressCreate, realEstateCreate } from "../interfaces";

const createRealEstate =async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await realEstateServices.createRealEstate(req.body)
    
    return res.status(201).json(realEstate);
}

const readRealEstate =async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await realEstateServices.readRealEstate();
    return res.status(200).json(realEstate);
}

export default { createRealEstate, readRealEstate}