// actions
import type { ServiceProvider } from '../interfaces'
import { setRating } from '../redux/actions'
// redux
import { useDispatch } from 'react-redux'

export const useRatingHook = (): {
  filteredRating: Record<number, (a: ServiceProvider, b: ServiceProvider) => number>
  useRating: (rating: number) => void
} => {
  const dispatch = useDispatch()
  const filteredRating: Record<number, (a: ServiceProvider, b: ServiceProvider) => number> = {
    // 1: (a, b) => b.reviews.rating - a.reviews.rating,
    // 2: (a, b) => a.reviews.rating - b.reviews.rating
  }

  const useRating = (rating: number): void => {
    dispatch(setRating(rating))
  }

  return {
    filteredRating,
    useRating
  }
}
