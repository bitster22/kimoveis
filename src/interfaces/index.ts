import {
    UserCreate,
    UserRead,
    UserReturn,
    UserUpdate,
    UserRepo,
  } from "./user.interfaces";

import { 
  SessionCreate,
  SessionReturn
} from "./session.interfaces"

import { 
  CategoryRepo, 
  CategoryCreate,
  CategoryRead } from "./category.interface";

import{
  ScheduleRepo, 
  ScheduleCreate
} from "./schedule.interfaces"

import{
  realEstateCreate, realEstateRepo
} from "./realEstate.interfaces"

import{
  addressCreate, 
  addressRepo
} from "./address.interface"

  export {
    UserCreate,
    UserRead,
    UserReturn,
    UserUpdate,
    UserRepo,
    SessionCreate,
    SessionReturn,
    CategoryRepo, 
    CategoryCreate,
    CategoryRead,
    ScheduleRepo, 
    ScheduleCreate,
    addressCreate, 
    addressRepo,realEstateCreate, realEstateRepo
  };