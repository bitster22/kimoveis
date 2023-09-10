import { Schedule } from "../entities";
import { ScheduleCreate } from "../interfaces";
import { realEstateRepository, scheduleRepository } from "../repositories";

const createSchedule = async (
  payload: ScheduleCreate,
  userId: number,
  realEstateId: number
): Promise<Schedule> => {
  const schedule: Schedule = scheduleRepository.create({
    ...payload,
    user: { id: userId },
    realEstate: { id: realEstateId },
  });
  await scheduleRepository.save(schedule);
  return schedule;
};

const retrieveRealEstateSchedule = async (realEstateId: number) => {
  const realEstate = await realEstateRepository.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      address: true,
      category: true,
      schedules: {
        user: true,
      },
    },
  });

  return realEstate;
};

export default { createSchedule, retrieveRealEstateSchedule };
