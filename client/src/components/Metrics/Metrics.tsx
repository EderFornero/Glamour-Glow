import React from 'react'
import Pies from './Charts/UsersChart'
import SellersPies from './Charts/SellersChart'

const Metrics = (): JSX.Element => {
  return (
    <div>
      <div>
        <SellersPies />
      </div>
      <div>
        <Pies />
      </div>

    </div>
  )
}

export default Metrics
