import { UserModel } from "../models";

export const getUsersService = async () => {
  try {
    const allUsers = await UserModel.find({});
    return allUsers;
  } catch (error) {
    throw Error("Something went wrong");
  }
};

export const getUserByidService = async (id: any) => {
  try {
    const user = await UserModel.findById(id).exec();
    return user;
  } catch (error) {
    throw Error("Something went wrong");
  }
};

export const postUserService = async (user: any) => {
  try {
    const savedUser = await UserModel.create(user);
    return savedUser;
  } catch (error) {
    throw Error("Something went wrong");
  }
};

export const updateUserService = async (id: any, updates: any) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    throw Error("Something went wrong");
  }
};

export const deleteUserService = async (id: any) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { isActive: true },
      { new: true }
    );
    return user;
  } catch (error) {
    throw Error("Something went wrong");
  }
};
