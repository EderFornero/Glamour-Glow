import type { ServiceProvider } from '../../interfaces'
import { NavLink } from 'react-router-dom'
import { Swiper,SwiperSlide } from 'swiper/react';
import styles from './Carousel.module.css';
import 'swiper/css';

interface CarouselProps {
    users: ServiceProvider[]; 
  }

const Carousel:React.FC<CarouselProps> = ({users}) => {
  return (
    <Swiper className={styles.swiper} spaceBetween={50} slidesPerView={3} loop navigation pagination autoplay>
        {users.map(({ id, businessName, rating, categories }: ServiceProvider) => {
        return <SwiperSlide className={styles.swiperslide}>
            <article className={styles.cards}>
                {/* <img src="source" alt="alt" /> */}
                <h2>Name: {businessName}</h2>
                <p>Rating: {rating}</p>
                {categories.map((category) => {
                    return <p key={id}>{category}</p>
                })}
                <NavLink to='ROUTE HERE'>
                    <button>Check it out</button>
                </NavLink>
            </article>
        </SwiperSlide> 
    })}   
    </Swiper>
  );
};

export default Carousel