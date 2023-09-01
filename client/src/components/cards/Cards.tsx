// components
import BusinessCard from '../BusinessCard/BusinessCard'
// interfaces
import type { ServiceProvider } from '../../interfaces';
// css
import style from './Cards.module.css';
// props
import type { CardsProps } from '../../interfaces/props';

const Cards: React.FC<CardsProps> = ({ searchUsers }: CardsProps) => {
    return (
        <section className={style.cardsSection}>
            {searchUsers.map(({ id, businessName, businessLocation, rating, categories, services }: ServiceProvider) => {
                return <BusinessCard key={id} id={id} businessName={businessName} businessLocation={businessLocation} rating={rating} categories={categories} services={services} />
            })}
        </section>
    );
};

export default Cards;
