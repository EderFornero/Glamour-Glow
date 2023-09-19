import { useEffect } from 'react'
import UsersPies from './Charts/UsersChart'
import SellersPies from './Charts/SellersChart'
import style from './Metrics.module.css'
import SellerUsersPie from './Charts/SellersUsersChart'
import AllAccountPies from './Charts/AllAccountsChart'
import { getUserMetrics, getSellerMetrics } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux/types'

const Metrics = (): JSX.Element => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserMetrics())
    dispatch(getSellerMetrics())
  }, [dispatch])
  const userMetrics = useSelector((state: RootState) => state.userMetrics)
  const sellerMetrics = useSelector((state: RootState) => state.sellerMetrics)

  return (
    <div className={style.content}>
      <div className={style.unit}>
        <SellersPies sellerMetrics={sellerMetrics}/>
      </div>
      <div className={style.unit}>
        <UsersPies userMetrics={userMetrics}/>
      </div>
      <div className={style.unit}>
        <SellerUsersPie userMetrics={userMetrics} sellerMetrics={sellerMetrics}/>
      </div>
      <div className={style.unit}>
        <AllAccountPies userMetrics={userMetrics} sellerMetrics={sellerMetrics}/>
      </div>
    </div>
  )
}

export default Metrics
