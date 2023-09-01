import { UserModel } from "../models";

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
// let prueba = {
//   username: "FirstUser",
//   fullname: "Primero Us",
//   email: "posta@gmail.com",
//   password: "postobon",
//   role: "customer",
//   date_of_birth: "2012-04-21",
//   image: "imagen2POSTA",
//   isActive: "false",
// };
//let prueba2 = JSON.stringify(prueba);
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
