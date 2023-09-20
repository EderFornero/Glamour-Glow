const useRating = (reviews: any[]): number | string => {
  if (reviews?.length === 0) {
    const averageRating = 'Shop does not have enough reviews'
    return averageRating
  }

  const totalRating = reviews?.reduce((accumulator, current) => accumulator + current.rating, 0)
  const averageRating = totalRating / reviews?.length
  return averageRating
}

export default useRating
