import { z } from "zod";
import { scheduleCreateSchema } from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>

type ScheduleRepo = Repository<Schedule>;

export {ScheduleRepo, ScheduleCreate}