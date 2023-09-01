// components
import SearchBar from '../../components/SearchBar/SearchBar'
import Cards from '../../components/Cards/Cards'
// hooks
import { useSearchBarHome } from '../../hooks/index'
// mock
import { users } from '../../../../mocks/fullAPIresponse.json'
// css
import style from './BusinessCardsView.module.css'

const BusinessCardsView = (): JSX.Element => {
  const { searchResults, handleOnSearch } = useSearchBarHome(users)
  return (
    <div className={style['div-business-cards-view']}>
      {/* The missing property isnt require */}
      <SearchBar onSearch={handleOnSearch} />
      <div className={style['div-business-cards']}>
       <Cards searchUsers={searchResults.length > 0 ? searchResults : users} />
      </div>
    </div>
  )
}

export default BusinessCardsView
