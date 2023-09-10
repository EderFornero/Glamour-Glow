import { UserModel } from "../models";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

export const readUsers = async () => {
  const allUsers = await UserModel.find({}).select({ password: 0 });
  return allUsers;
};

export const readUserById = async (id: String) => {
  const user = await UserModel.findById(id).select({ password: 0 }).exec();
  if (!user || !user.isActive) {
    throw Error("User not found");
  }
  return user;
};

export const createUser = async (user: Object) => {
  const savedUser = await UserModel.create(user);
  return savedUser;
};

export const updateUser = async (id: String, updates: Object) => {
  const updatedUser = await UserModel.findByIdAndUpdate(id, updates, {
    new: true,
  });
  return updatedUser;
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

export const validateLogIn = async (email: string, password: string) => {
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
    return { id: user._id, role: user.role};
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const generateToken = async (email: string) => {
  try {
    const user = await UserModel.findOne({ email }).exec();
    const token = await jwt.sign(
      { name: user?.name, id: user?._id, role: user?.role },
      process.env.TOKEN_ENCRYPTION!,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const forgotPasswordHandler = async (email: string) => {
  const user = await UserModel.findOne({email})
  console.log("user", user)
  return user
}

export const resetPasswordUser = async (id: string, newPassword: string) => {
  const user = await UserModel.findById(id);
  if(user){
    if(newPassword === user.password){
      throw Error("Input password can't match the current password")
    }
    user.password = newPassword
    user.passwordResetCode = null 
    user.save()
  }
  console.log(user);
  return user
}