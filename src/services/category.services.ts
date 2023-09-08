import { Category } from "../entities";
import { CategoryCreate, CategoryRead } from "../interfaces";
import { categoryRepository } from "../repositories";
import { categoryReadSchema } from "../schemas";

const createCategory = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);

  return category;
};

const readCategory =async (): Promise<CategoryRead> => {
    return categoryReadSchema.parse(await categoryRepository.find())
}

export default { createCategory, readCategory };