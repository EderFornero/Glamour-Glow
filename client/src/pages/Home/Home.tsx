import Cards from '../../components/Cards/Cards'
import Nav from '../../components/Nav/Nav'
import SideBar from '../../components/SideBar/SideBar'

const Home: React.FC = () => {
  return (
    <div>
      <Nav />
      <Cards />
      <SideBar/>
    </div>
  )
}

export default Home
