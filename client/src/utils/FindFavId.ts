export const findFavId = (favourites: any[], sellerId: string | undefined): any => {
  const favorite = favourites.find((favourite) => favourite.seller._id === sellerId)

  if (favorite !== null) {
    return favorite._id //
  }

  return null
}
