// components
import SearchBar from '../../components/SearchBar/SearchBar'
import Cards from '../../components/Cards/Cards'
// hooks
import { useSearchBarHome } from '../../hooks/index'
// mock
import { users } from '../../../../mocks/fullAPIresponse.json'
// css
import style from './BusinessCardsView.module.css'
// redux
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/types'


const BusinessCardsView = (): JSX.Element => {
  const { allServices } = useSelector((state: RootState) => state)
  // const { searchResults, handleOnSearch } = useSearchBarHome(allServices)
  return (
    <div className={style['div-business-cards-view']}>
      {/* The missing property isnt require */}
      {/* <SearchBar onSearch={handleOnSearch} /> */}
      <div className={style['div-business-cards']}>
        <Cards allServices={allServices} />
      </div>
    </div>
  )
}

export default BusinessCardsView
