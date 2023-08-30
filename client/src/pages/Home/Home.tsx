import Cards from '../../components/Cards/Cards'
import Nav from '../../components/Nav/Nav'
import SideBar from '../../components/SideBar/SideBar'
import Fotter from '../../components/Footer/Fotter'

const Home: React.FC = () => {
  return (
    <div>
      <Nav />
      <Cards />
      <Fotter/>
    </div>
  )
}

export default Home
