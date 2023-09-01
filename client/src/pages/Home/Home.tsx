import Cards from '../../components/Cards/Cards';
import Carousel from '../../components/Carousel/Carousel';
import {
  Description,
  Description2,
} from '../../components/Description/Description';
import { users } from '../../../../mocks/fullAPIresponse.json';
import SearchBar from '../../components/SearchBar/SearchBar';
import FAQ from '../../components/FAQ/FAQ';
// hooks
import { useSearchBarHome } from '../../hooks/index';
import { useState } from 'react';

const Home: React.FC = () => {
  const { searchResults, handleOnSearch } = useSearchBarHome(users);
  const [showCards, setShowCards] = useState(false);

  const updateShowCards = (hasQuery: boolean): void => {
    setShowCards(hasQuery);
  };

  return (
    <div>
      <SearchBar onSearch={handleOnSearch} updateShowCards={updateShowCards} />
      {showCards ? (
        <Cards searchUsers={searchResults.length > 0 ? searchResults : users} />
      ) : (
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
  );
};

export default Home;
