// mock
import { users } from '../../../../mocks/fullAPIresponse.json'
// components
import Cards from '../../components/Cards/Cards'

import SearchBar from '../../components/SearchBar/SearchBar'
// hooks
import { useSearchBarHome } from '../../hooks/index'

const Home = (): JSX.Element => {
  const { searchResults, handleOnSearch } = useSearchBarHome(users)
  return (
    <div>
      <SearchBar onSearch={handleOnSearch} />
      <Cards searchUsers={searchResults.length > 0 ? searchResults : users} />
    </div>
  )
}

export default Home
