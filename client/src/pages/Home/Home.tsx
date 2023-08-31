import Cards from '../../components/Cards/Cards'
import Nav from '../../components/Nav/Nav'
import Carousel from '../../components/Carousel/Carousel'
import Fotter from '../../components/Footer/Footer'
import { users } from '../../../../mocks/fullAPIresponse.json'

const Home: React.FC = () => {
  return (
    <div>
      <Nav />
      <Carousel users={users}/>
      <Cards />
      <Fotter/>
    </div>
  )
}

export default Home
