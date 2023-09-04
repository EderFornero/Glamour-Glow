// redux
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/types'
// actions
import { setPages } from '../redux/Actions'
import type { ServiceProvider } from '../interfaces'
import { useFilterHook } from './Filter'

export const Pagination = (searchUsers: ServiceProvider[]): {
  pages: number
  startPage: () => void
  finalPage: () => void
  previousPage: () => void
  nextPage: () => void
  startSlice: number
  finalSlice: number
  totalPages: number
} => {
  const { pages } = useSelector((state: RootState) => state)
  const { filteredUsers } = useFilterHook(searchUsers)
  const dispatch = useDispatch()

  const perPage = 6
  const startSlice = pages * perPage
  const finalSlice = startSlice + perPage
  const totalPages = Math.ceil(filteredUsers.length / perPage)

  const previousPage = (): void => {
    // avoid invalid values
    dispatch(setPages(Math.max(pages - 1, 0)))
  }

  const nextPage = (): void => {
    // go to next page
    dispatch(setPages(pages + 1))
  }

  const startPage = (): void => {
    dispatch(setPages(0))
  }

  const finalPage = (): void => {
    dispatch(setPages(totalPages - 1))
  }

  return {
    pages,
    startPage,
    finalPage,
    previousPage,
    nextPage,
    startSlice,
    finalSlice,
    totalPages
  }
}
