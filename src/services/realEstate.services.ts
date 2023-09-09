import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import { addressCreate, realEstateCreate } from "../interfaces";
import { addressRepository, categoryRepository, realEstateRepository } from "../repositories";

const createRealEstate =async (payload: realEstateCreate,addressCreate: addressCreate, categoryId: number) => {
    const address: Address = await addressRepository.create(addressCreate);
    await addressRepository.save(address)
    
    const category: Category = (await categoryRepository.findOneBy({id: categoryId}))!
    if (!category){
        throw new AppError("Invalid category", 404);
    }

    const realEstate: RealEstate = realEstateRepository.create({
        ...payload,
        category: category,
        address: address
    })

    await realEstateRepository.save(realEstate);

    return realEstate
}

export default { createRealEstate}