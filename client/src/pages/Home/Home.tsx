import Cards from '../../components/Cards/Cards'
import Carousel from '../../components/Carousel/Carousel'
import Fotter from '../../components/Footer/Footer'
import { Description, Description2 } from '../../components/Description/Description'
import { users } from '../../../../mocks/fullAPIresponse.json'
import SearchBar from '../../components/SearchBar/SearchBar'
// hooks
import { useSearchBarHome } from '../../hooks/index'

const Home: React.FC = () => {
  const { searchResults, handleOnSearch } = useSearchBarHome(users)
  return (
    <>
      <SearchBar onSearch={handleOnSearch} />
      <Description />
      <Carousel users={users} />
      <Cards searchUsers={searchResults.length > 0 ? searchResults : users} />
      <Description2 />
      <Fotter />
    </>
  )
}

export default Home
