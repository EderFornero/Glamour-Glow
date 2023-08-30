import Cards from '../../components/Cards/Cards'
import Nav from '../../components/Nav/Nav'
import Carousel from '../../components/Carousel/Carousel'
import Fotter from '../../components/Footer/Fotter'

const Home: React.FC = () => {
  return (
    <div>
      <Nav />
      <Carousel/>
      <Cards />
      <Fotter/>
    </div>
  )
}

export default Home
