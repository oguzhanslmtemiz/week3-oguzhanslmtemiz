import { IUser } from "../interfaces/User";
import User from "../models/User";

const create = async (data: IUser) => {
  return await User.create(data);
};

const read = async (username: string) => {
  return await User.findOne({ username });
};

const list = async () => {
  return await User.find({});
};

export { create, read, list };
