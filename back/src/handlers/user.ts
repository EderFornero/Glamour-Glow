import { UserModel } from "../models";

export const readUsers = async () => {
  const allUsers = await UserModel.find({});
  return allUsers;
};

export const readUserById = async (id: String) => {
  const user = await UserModel.findById(id).exec();
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
export const destroyUser = async (id: String) => {
  const user = await UserModel.findByIdAndUpdate(
    id,
    { isActive: false },
    {
      new: true,
    }
  );
  return user;
};
