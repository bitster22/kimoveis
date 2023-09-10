import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const createUser = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

const readUser = async (): Promise<UserRead> => {
  return userReadSchema.parse(await userRepository.find());
};

const partialUpdateUser = async (
  user: User,
  payload: UserUpdate
): Promise<UserReturn> => {
  const userUpdate: User = userRepository.create({ ...user, ...payload });
  await userRepository.save(userUpdate);
  return userReturnSchema.parse(userUpdate);
};

const destroyUser = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { createUser, readUser, destroyUser, partialUpdateUser };
