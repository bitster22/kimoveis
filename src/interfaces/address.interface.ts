import { z } from "zod";
import { addressCreateSchema } from "../schemas/address.schemas";
import { Repository } from "typeorm";
import { Address } from "../entities";

type addressCreate = z.infer<typeof addressCreateSchema>;
type addressRepo = Repository<Address>;

export { addressCreate, addressRepo };
