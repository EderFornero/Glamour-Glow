import { UserModel } from "../models";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

export const readUsersService = async () => {
  try {
    const allUsers = await UserModel.find({});
    return allUsers;
  } catch (error) {
    throw Error("Something went wrong");
  }
};

export const readUserByidService = async (id: any) => {
  try {
    const user = await UserModel.findById(id).exec();
    if (!user || !user.isActive) {
      throw Error("User not found");
    }
    return user;
  } catch (error: any) {
    if (error.message === "User not found") {
      throw error;
    }
    throw new Error("Something went wrong");
  }
};

export const createUserService = async (user: any) => {
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

export const destroyUserService = async (id: any) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );

    return user;
  } catch (error) {
    throw Error("Something went wrong");
  }
};

export const validateLogIn = async (email: any, password: any) => {
  //change "any" type
  try {
    const user = await UserModel.findOne({ email }).exec();
    if (!user) {
      throw new Error("User is not registered");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) {
      return false;
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const generateToken = async (email: any) => {
  try {
    const user = await UserModel.findOne({ email }).exec();
    const token = await jwt.sign(
      { name: user?.username, id: user?._id },
      process.env.TOKEN_ENCRYPTION!
    );
    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
