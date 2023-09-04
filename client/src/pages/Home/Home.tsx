import Cards from '../../components/Cards/Cards'
import Carousel from '../../components/Carousel/Carousel'
import {
  Description,
  Description2
} from '../../components/Description/Description'
import { users } from '../../../../mocks/fullAPIresponse.json'
import SearchBar from '../../components/SearchBar/SearchBar'
import FAQ from '../../components/FAQ/FAQ'
// hooks
import { useSearchBarHome } from '../../hooks/index'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux/types'
import { GetAllBusiness } from '../../redux/Actions'


const Home: React.FC = () => {
  const { searchResults, handleOnSearch } = useSearchBarHome(users)
  const [showCards, setShowCards] = useState(false)
  const dispatch = useDispatch()

  const updateShowCards = (hasQuery: boolean): void => {
    setShowCards(hasQuery)
  }

  const cards = useSelector((state: RootState) => state.allServices)
  console.log(cards)

  useEffect(() => {
    console.log('aqui')
    dispatch(GetAllBusiness())
    console.log('listo')
  }, [dispatch, showCards])

  return (
    <div>
      <SearchBar onSearch={handleOnSearch} updateShowCards={updateShowCards} />
      {showCards
        ? (
          <Cards searchUsers={searchResults.length > 0 ? searchResults : users} />
        )
        : (
          <>
            <Description />
            <Carousel cardstoshow={users} carouselName="Recomended" />
            <Carousel cardstoshow={users} carouselName="Most Liked" />
            <Carousel cardstoshow={users} carouselName="Nearest" />
            <Description2 />
            <FAQ />
          </>
        )}
    </div>
  )
}

export default Home
