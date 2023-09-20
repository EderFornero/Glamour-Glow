import { PaymentsModel, UserModel } from "../models";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { createPaymentsSchemaType } from "../schemas/paymentsSchema";
config();

const pipeline = [
  {
    $lookup: {
      from: "favorites",
      localField: "favorites",
      foreignField: "_id",
      as: "favorites",
    },
  },
  {
    $unwind: {
      path: "$favorites",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $lookup: {
      from: "sellers",
      localField: "favorites.sellerId",
      foreignField: "_id",
      as: "favorites.seller",
    },
  },
  {
    $unwind: {
      path: "$favorites.seller",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $lookup: {
      from: "categories",
      localField: "favorites.seller.categoriesArray",
      foreignField: "_id",
      as: "favorites.seller.categoriesArray",
    },
  },
  {
    $lookup: {
      from: "reviews",
      localField: "favorites.seller.reviews",
      foreignField: "_id",
      as: "favorites.seller.reviews",
    },
  },
  {
    $set: {
      "favorites.seller.totalRating": {
        $avg: "$favorites.seller.reviews.rating",
      },
    },
  },
  {
    $group: {
      _id: "$_id",
      name: { $first: "$name" },
      lastName: { $first: "$lastName" },
      email: { $first: "$email" },
      phoneNumber: { $first: "$phoneNumber" },
      role: { $first: "$role" },
      dateOfBirth: { $first: "$dateOfBirth" },
      image: { $first: "$image" },
      isActive: { $first: "$isActive" },
      favorites: { $push: "$favorites" },
    },
  },
  {
    $unset: [
      "favorites.createdAt",
      "favorites.userId",
      "favorites.seller.sellerPassword",
      "favorites.seller.sellerEmail",
      "favorites.seller.role",
      "favorites.seller.isActive",
      "favorites.seller.accountBalance",
      "favorites.seller.sellerPhone",
      "favorites.seller.sellerGender",
      "favorites.seller.servicesArray",
      "favorites.seller.categoriesArray._id",
      "favorites.seller.reviews._id",
      "favorites.seller.reviews.description",
      "favorites.seller.reviews.userId",
      "favorites.seller.reviews.sellerId",
      "favorites.seller.createdAt",
      "favorites.seller.updatedAt",
      "favorites.updatedAt",
    ],
  },
];

export const readUsers = async () => {
  const allUsers = await UserModel.find({}).select({ password: 0 }).exec();
  return allUsers;
};

export const readUserById = async (id: String) => {
  const [user] = await UserModel.aggregate([
    { $match: { $expr: { $eq: ["$_id", { $toObjectId: id }] } } },
    ...pipeline,
  ]);
  if (!user) {
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
  }).select({ password: 0 });
  return updatedUser;
};

export const reActiveUser = async (id : String) => {
  try {
    await UserModel.findByIdAndUpdate(
      id,
      { isActive: true },
      {
        new: true,
      }
    );
    return "User has been successfully enabled";
  } catch (error) {
    throw Error("Something went wrong");
  }
}

export const disableUserService = async (id: string) => {
  try {
    await UserModel.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );
    return "User has been successfully disabled";
  } catch (error) {
    throw Error("Something went wrong");
  }
};

export const validateLogIn = async (email: string, password: string) => {
  //change "any" type
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("User is not registered");
    }
    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      return false;
    }
    return { id: user._id, isActive : user.isActive, role: user.role };
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
  const user = await UserModel.findOne({ email });
  return user;
};

export const resetPasswordUser = async (id: string, newPassword: string) => {
  const user = await UserModel.findById(id);
  if (user) {
    if (newPassword === user.password) {
      throw Error("Input password can't match the current password");
    }
    user.password = newPassword;
    user.passwordResetCode = null;
    user.save();
  }
  return user;
};
export const postTransactionsHandler = async (data: createPaymentsSchemaType) => {
  const payment = await PaymentsModel.create(data)
  if(!data) {
    throw new Error("There is no payments related to this credentials")
  }
  return payment;
}
