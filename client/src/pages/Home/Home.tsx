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
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/types';
import { GetAllServices } from '../../redux/Actions';

const Home: React.FC = () => {
  const { searchResults, handleOnSearch } = useSearchBarHome(users);
  const [showCards, setShowCards] = useState(false);

  const updateShowCards = (hasQuery: boolean): void => {
    setShowCards(hasQuery);
  };

  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(GetAllServices());
    };
    fetchData();
  }, [dispatch]);

  const cards = useSelector((state: RootState) => state.allServices);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <div>
      <SearchBar onSearch={handleOnSearch} updateShowCards={updateShowCards} />
      <Cards searchUsers={searchResults.length > 0 ? cards : users} />
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
