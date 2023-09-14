// components
import SearchBar from '../../components/SearchBar/SearchBar'
import Cards from '../../components/cards/Cards'
// hooks
// import { useSearchBarHome } from '../../hooks/index'
// // mock
// import { users } from '../../../../mocks/fullAPIresponse.json'
// css
import style from './BusinessCardsView.module.css'
// redux
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux/types'
import { useSearchBarHome } from '../../hooks'
import { getAllBusiness } from '../../redux/actions'
import { useEffect } from 'react'

const BusinessCardsView = (): JSX.Element => {
  const { allServices } = useSelector((state: RootState) => state)
  const { searchResults, handleOnSearch } = useSearchBarHome(allServices)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBusiness())
  }, [dispatch])

  return (
    <div className={style['div-business-cards-view']}>
      {/* The missing property isnt require */}
      <SearchBar onSearch={handleOnSearch} />
      <div className={style['div-business-cards']}>
        <Cards allServices={searchResults.length > 0 ? searchResults : allServices} />
      </div>
    </div>
  )
}

export default BusinessCardsView
