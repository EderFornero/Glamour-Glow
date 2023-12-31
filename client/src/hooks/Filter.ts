// actions
import { setFilter } from '../redux/actions'
// redux
import { useDispatch, useSelector } from 'react-redux'
// root
import type { RootState } from '../redux/types'
// interface
import type { ServiceProvider } from '../interfaces/index'
// hook
import { useRatingHook } from '.'

export const useFilterHook = (
  allServices: ServiceProvider[]
): {
    useFilter: (category: string) => void
    filteredUsers: ServiceProvider[]
  } => {
  const { filteredRating } = useRatingHook()
  const { filter, rating } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const filteredCategories = (category: string): ((users: any) => any) => {
    if (typeof category === 'string' && category !== 'none') return (users) => users.categoriesArray.some((c: any) => c.name === category)
    else return (users) => users
  }

  const useFilter = (category: string): void => {
    dispatch(setFilter(category))
  }

  const filteredUsers =
    allServices
      .sort(filteredRating[rating])
      .filter(filteredCategories(filter))

  return {
    useFilter,
    filteredUsers
  }
}
