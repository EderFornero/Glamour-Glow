// actions
import { setFilter } from '../redux/actions'
// redux
import { useDispatch, useSelector } from 'react-redux'
// root
import type { RootState } from '../redux/types'
// interface
import type { ServiceProvider } from '../interfaces/index'
// hook

export const useFilterHook = (
  searchUsers: ServiceProvider[]
): {
    useFilter: (category: string) => void
    filteredUsers: ServiceProvider[]
  } => {
  const { filter } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const filteredCategories = (category: string): ((users: any) => any) => {
    if (typeof category === 'string' && category !== 'none') {
      return (users: any) => {
        if (users && users.categories) {
          return users.categories.includes(category)
        }
        return false
      }
    } else {
      return (users: any) => users
    }
  }

  const useFilter = (category: string): void => {
    dispatch(setFilter(category))
  }

  const filteredUsers = searchUsers.filter(filteredCategories(filter))

  return {
    useFilter,
    filteredUsers
  }
}
