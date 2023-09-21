import type { Category, ReviewRating } from '../interfaces'

export interface Favorite {
  _id: string
  seller: any
}

export interface Seller {
  sellerName: string
  reviews: ReviewRating[]
  categoriesArray: Category[]
  totalRating: number
}

export const checkFavourite = (userFavourites: Favorite[], sellerId: string | undefined): boolean => {
  const length = userFavourites.length
  for (let i = 0; i < length; i++) {
    if (userFavourites[i].seller._id === sellerId) {
      return true
    }
  }
  return false
}
