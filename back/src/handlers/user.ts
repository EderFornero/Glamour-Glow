import { UserModel } from "../models";

export const readUsersService = async () => {
  const allUsers = await UserModel.find({});
  return allUsers;
};

export const readUserByidService = async (id: String) => {
  const user = await UserModel.findById(id).exec();
  if (!user || !user.isActive) {
    throw Error("User not found");
  }
  return user;
};

export const createUserService = async (user: Object) => {
  const savedUser = await UserModel.create(user);
  return savedUser;
};

export const updateUserService = async (id: String, updates: Object) => {
  const updatedUser = await UserModel.findByIdAndUpdate(id, updates, {
    new: true,
  });
  return updatedUser;
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
export const destroyUserService = async (id: String) => {
  const user = await UserModel.findByIdAndUpdate(
    id,
    { isActive: false },
    {
      new: true,
    }
  );
  return user;
};
