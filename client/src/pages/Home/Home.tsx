import Cards from '../../components/Cards/Cards'
import Nav from '../../components/Nav/Nav'
import Carousel from '../../components/Carousel/Carousel'
import Fotter from '../../components/Footer/Footer'
import {Description,Description2} from '../../components/Description/Description'
import { users } from '../../../../mocks/fullAPIresponse.json'

const Home: React.FC = () => {
  return (
    <div>
      <Nav />
      <Description/>
      <Carousel users={users}/>
      <Cards />
      <Description2/>
      <Fotter/>
    </div>
  )
}

export default Home
