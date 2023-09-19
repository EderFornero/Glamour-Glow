// css
import styles from './UserDetail.module.css'
// components
import UserDetailFirstSection from '../../components/UserDetailDestructure/UserDetailFirstSection'
// import DivDirectionsPaymentWays from '../../components/UserDetailDestructure/SecondSection/UserDetailDirectionPayment'
// import UserDetailSocialMedia from '../../components/UserDetailDestructure/SecondSection/UserDetailSocialMedia'
// import UserDetailNotification from '../../components/UserDetailDestructure/SecondSection/UserDetailNotification'
import UserDetailFavoritesDelete from '../../components/UserDetailDestructure/SecondSection/UserDetailFavoritesDelete'

function UserDetail (): JSX.Element {
  return (
        <div className={styles.section}>
          <UserDetailFirstSection />
          <section className={styles.sectionright}>
            {/* <DivDirectionsPaymentWays />
            <UserDetailSocialMedia />
            <UserDetailNotification /> */}
            <UserDetailFavoritesDelete />
          </section>
        </div>
  )
}

export default UserDetail
