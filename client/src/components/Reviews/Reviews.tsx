import { useParams } from 'react-router-dom';
import style from './Reviews.module.css';
import { users } from '../../../../mocks/fullAPIresponse.json';
import Review from '../Review/Review';

const Reviews = (): JSX.Element => {
    const { id } = useParams()
    let user = users.find(user => user.id === +id)

    return (
        <section className={style.reviews}>
            {user?.reviews?.map(({ date, comment, rating, serviceName }: any, index: number) => {
                return (
                    <Review
                        key={`review-${index}`}
                        date={date}
                        comment={comment}
                        rating={rating}
                        serviceName={serviceName}
                    />
                );
            })}
        </section>
    );
}

export default Reviews;
