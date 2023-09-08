import Cards from '../../components/cards/Cards'
import Carousel from '../../components/Carousel/Carousel'
import { Description, Description2 } from '../../components/Description/Description'
// import { users } from '../../../../mocks/fullAPIresponse.json'
import SearchBar from '../../components/SearchBar/SearchBar'
import FAQ from '../../components/FAQ/FAQ'
import type { RootState } from '../../redux/types'
// hooks
import { useSearchBarHome } from '../../hooks/index'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllBusiness } from '../../redux/actions'

const Home: React.FC = () => {
  const allServices = useSelector((state: RootState) => state.allServices)
  const { searchResults, handleOnSearch } = useSearchBarHome(allServices)
  const [showCards, setShowCards] = useState(false)
  const dispatch = useDispatch()

  const updateShowCards = (hasQuery: boolean): void => {
    setShowCards(hasQuery)
  }

  useEffect(() => {
    dispatch(getAllBusiness())
  }, [dispatch, showCards])

  return (
    <div>
      <SearchBar onSearch={handleOnSearch} updateShowCards={updateShowCards} />
      {showCards
        ? (<Cards searchUsers={searchResults.length > 0 ? searchResults : allServices} />)
        : (
        <>
          <Description />
          <Carousel cardstoshow={allServices} carouselName='Recomended' />
          <Carousel cardstoshow={allServices} carouselName='Most Liked' />
          <Carousel cardstoshow={allServices} carouselName='Nearest' />
          <Description2 />
          <FAQ />
        </>
          )}
    </div>
  )
}

export default Home
