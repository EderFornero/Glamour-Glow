import Cards from '../../components/CardsContainer/Cards'
import Carousel from '../../components/Carousel/Carousel'
import { Description, Description2 } from '../../components/Description/Description'
// import { users } from '../../../../mocks/fullAPIresponse.json'
import SearchBar from '../../components/SearchBar/SearchBar'
import FAQ from '../../components/FAQ/FAQ'
import type { RootState } from '../../redux/types'
// hooks
import { useSearchBarHome } from '../../hooks/index'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserbyId } from '../../redux/actions'
import useRating from '../../hooks/useRating'

const Home: React.FC = () => {
  const allServices = useSelector((state: RootState) => state.allServices)
  const { searchResults, handleOnSearch } = useSearchBarHome(allServices)
  const [showCards, setShowCards] = useState(false)
  const dispatch = useDispatch()

  // al rato arreglo los anys queria que funcara :**     n.n
  const recomendedServices: any = allServices.filter((seller) => {
    const { reviews } = seller
    const avg: any = useRating(reviews)
    return avg >= 4 && avg <= 5
  })

  const mostServices: any = allServices.filter((seller) => {
    const { reviews } = seller
    const avg: any = useRating(reviews)
    return avg < 4
  })

  const updateShowCards = (hasQuery: boolean): void => {
    setShowCards(hasQuery)
  }
  useEffect(() => {
    const id = localStorage.getItem('id')
    if (id !== null) {
      dispatch(getUserbyId(id))
    }
  }, [])
  const emailRedux = useSelector((state: RootState) => state.sellerEmail)
  const accountBalance = useSelector((state: RootState) => state.accountBalance)
  console.log(emailRedux, accountBalance)

  return (
    <div>
      <SearchBar onSearch={handleOnSearch} updateShowCards={updateShowCards} />
      {showCards
        ? (
          <Cards allServices={searchResults.length > 0 ? searchResults : allServices} />
          )
        : (
          <>
            <Description />
            <Carousel cardstoshow={recomendedServices} carouselName='Recomended' />
            <Carousel cardstoshow={mostServices} carouselName='More services' />
            <Description2 />
            <FAQ />
          </>
          )}
    </div>
  )
}

export default Home
