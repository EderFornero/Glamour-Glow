import { FavoritesModel, UserModel } from "../models";
import { createFavoriteType } from "../schemas/favoritesSchema";

export const createFavoritesHandler = async (data: createFavoriteType) => {

    let newFavorite = await FavoritesModel.create(data)
   // console.log(newFavorite)
    const userInformation = await UserModel.findByIdAndUpdate({_id: newFavorite.userId}, {"$push": {favorites: newFavorite}})
   console.log(userInformation)
    return newFavorite;

}

export const readFavorites = async () => {
    const allFavorites = await FavoritesModel
    .find({})
    .populate("sellerId", {
        _id: 0,
        sellerName: 1,
        reviews: 1,
        categoriesArray: 1
    });
    return allFavorites;
}

export const deleteFavorites = async(id: string) => {
    const removeFavorite = await FavoritesModel.findByIdAndDelete(id)

    await UserModel.findOneAndUpdate({_id: removeFavorite?.userId}, {"$pull": {favorites: id}})

    return id
}