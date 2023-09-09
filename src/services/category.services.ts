import { Category } from "../entities";
import { CategoryCreate, CategoryRead } from "../interfaces";
import { categoryRepository, realEstateRepository } from "../repositories";
import { categoryReadSchema, realEstateFullReturnSchema } from "../schemas";

const createCategory = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);

  return category;
};

const readCategory =async (): Promise<CategoryRead> => {
    return categoryReadSchema.parse(await categoryRepository.find())
}

const retrieveRealEstateCategory =async (categoryId:number) => {
//   const realEstate = await realEstateRepository.find({
//     where:{
//       category: {id: categoryId}
//     }
//   })
// return realEstate;

  const category = await categoryRepository.findOne({
    where:{
      id: categoryId
    },
    relations:{
      realEstate: true
    }
  })
  return category
}

export default { createCategory, readCategory, retrieveRealEstateCategory };