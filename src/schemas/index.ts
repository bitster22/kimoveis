import {
    userSchema,
    userCreateSchema,
    userUpdateSchema,
    userReturnSchema,
    userReadSchema,
  } from "./user.schemas";

import { sessionSchema } from "./session.schemas";
import { categorySchema, 
  categoryCreateSchema,
  categoryReadSchema} from "./category.schemas"

  import { realEstateSchema, realEstateCreateSchema, realEstateReturnSchema, realEstateFullReturnSchema} from "./realEstate.schemas"

import{scheduleSchema, scheduleCreateSchema} from "./schedule.schemas"

  export {
    userSchema,
    userCreateSchema,
    userUpdateSchema,
    userReturnSchema,
    userReadSchema,
    sessionSchema,
    categorySchema, 
    categoryCreateSchema,
    categoryReadSchema,
    scheduleSchema, 
    scheduleCreateSchema,
    realEstateSchema, 
    realEstateCreateSchema,
    realEstateReturnSchema,
    realEstateFullReturnSchema
};