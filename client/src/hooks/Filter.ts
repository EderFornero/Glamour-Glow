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
  searchUsers: ServiceProvider[]
): {
  useFilter: (category: string) => void
  filteredUsers: ServiceProvider[]
} => {
  const { filter, rating } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  const { filteredRating } = useRatingHook()

  const filteredCategories = (category: string): ((users: any) => any) => {
    if (typeof category === 'string' && category !== 'none') return (users: any) => users.categories.includes(category)
    else return (users: any) => users
  }

  const useFilter = (category: string): void => {
    dispatch(setFilter(category))
  }

  const filteredUsers = searchUsers.sort(filteredRating[rating]).filter(filteredCategories(filter))

  return {
    useFilter,
    filteredUsers
  }
}
