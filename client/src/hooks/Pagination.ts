// redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/types'
// actions
import { setPages } from '../redux/Actions'

export const Pagination = () => {
  const { pages } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const previousPage = () => {
    //avoid invalid values
    dispatch(setPages(Math.max(pages - 1, 0)));
  }

  const nextPage = () => {
    //go to next page
    dispatch(setPages(pages + 1));
  }
  

  return { 
    pages,
    previousPage,
    nextPage
  }
}