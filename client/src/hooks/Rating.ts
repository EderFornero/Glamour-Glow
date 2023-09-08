// actions
import { setRating } from '../redux/actions'
// redux
import { useDispatch } from 'react-redux'

export const useRatingHook = () => {
  const dispatch = useDispatch()
  const filteredRating: Record<number, (a: { rating: number }, b: { rating: number }) => number> = {
    1: (a, b) => b.rating - a.rating,
    2: (a, b) => a.rating - b.rating
  }

  const useRating = (rating: number): void => {
    dispatch(setRating(rating))
  }

  return {
    filteredRating,
    useRating
  }
}
