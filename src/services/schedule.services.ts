import { Schedule } from "../entities";
import { ScheduleCreate } from "../interfaces";
import { scheduleRepository } from "../repositories";

const createSchedule =async (payload: ScheduleCreate, userId: number, realEstateId: number): Promise<Schedule> => {
    const schedule: Schedule = scheduleRepository.create({
      ...payload,
      user: {id: userId},
      realEstate: {id: realEstateId}
    })
    await scheduleRepository.save(schedule);
    return schedule;
    
  };

export default {createSchedule }