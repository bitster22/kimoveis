import { z } from "zod";
import { addressCreateSchema, addressSchema } from "./address.schemas";
import { categorySchema } from "./category.schemas";
// import { categorySchema } from "./category.schemas";
// import { categoryCreateSchema, categorySchema } from "./category.schemas";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.string(),
    size: z.number().positive(),
    // category: categorySchema.array(),
    // address: addressSchema.array(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
})

const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true
})
.extend({
    // category: categoryCreateSchema.array(),
    categoryId: z.number().positive(),
    address: addressCreateSchema,
    value: z.number().positive()
})

const realEstateReturnSchema = realEstateSchema
// .omit({
//     updatedAt: true
// })
.extend({
    address: addressSchema
})

const realEstateFullReturnSchema = realEstateReturnSchema.extend({
    category: categorySchema
})

export { realEstateSchema, realEstateCreateSchema, realEstateReturnSchema, realEstateFullReturnSchema}