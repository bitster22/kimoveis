import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import { realEstateCreate } from "../interfaces";
import { addressRepository, categoryRepository, realEstateRepository } from "../repositories";
import { realEstateFullReturnSchema, realEstateReturnSchema } from "../schemas";


const createRealEstate =async (payload: realEstateCreate) => {    
    const category: Category = (await categoryRepository.findOneBy({id: payload.categoryId}))!
    if (!category){
        throw new AppError("Invalid category", 404);
    }
    const address: Address = await addressRepository.create(payload.address);
    await addressRepository.save(address)
    
    const realEstate: RealEstate = realEstateRepository.create({
        ...payload,
        category: category,
        address: address
    })

    await realEstateRepository.save(realEstate);
    // realEstate.value = realEstate.value.toString()

    return realEstate;
}

const readRealEstate =async () => {
    const realEstate = await realEstateRepository.find({
        relations: {
            address: true,
        }
    })
    // console.log(realEstateSchema.array().parse(realEstate))
    
    return realEstate;
}

export default { createRealEstate, readRealEstate}