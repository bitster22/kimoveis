import { z } from "zod";
// import { addressCreateSchema, addressSchema } from "./address.schemas";
// import { categoryCreateSchema, categorySchema } from "./category.schemas";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().positive(),
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
// .extend({
//     category: categoryCreateSchema.array(),
//     address: addressCreateSchema.array()
// })

export { realEstateSchema, realEstateCreateSchema}