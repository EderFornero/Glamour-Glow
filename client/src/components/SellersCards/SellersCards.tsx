import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBusiness } from '../../redux/actions'
import type { RootState } from '../../redux/types'
import SellersTable from '../SellersTable/SellersTable'
import style from './SellersCards.module.css'

const SellersCards: React.FC = () => {
  const dispatch = useDispatch()
  const sellers = useSelector((state: RootState) => state.allServices)

  useEffect(() => {
    dispatch(getAllBusiness())
  }, [sellers])

  const rows = sellers.map((seller) => ({
    _id: seller._id,
    sellerName: seller.sellerName,
    images: seller.images[0],
    sellerEmail: seller.sellerEmail,
    sellerPhone: seller.sellerPhone,
    isActive: seller.isActive,
    role: seller.role,
    createdAt: seller.createdAt,
    accountBalance: seller.accountBalance
  }))

  return (
    <div className={style.usersContainer}>
      <SellersTable rows={rows} />
    </div>
  )
}

export default SellersCards

// accountBalance: 1570
// categoriesArray: [{…}]
// createdAt:
// "2023-09-13T20:24:43.417Z"
// images: []
// isActive: true
// reviews: [{…}]
// role: "seller"
// sellerEmail: "eleganttresses@email.com"
// sellerGender: "female"
// sellerName: "Elegant Tresses Salon"
// sellerPassword: "$argon2id$v=19$m=65536,t=3,p=4$eeKg+sd/LNlmWNWdnYpbgQ$h920tA/clqtODa+UFWnR0zCx4EvL3T2hw6fUa5TdA1U"
// sellerPhone: "+1 (555) 123-4567"
// servicesArray: []
// updatedAt: "2023-09-16T02:29:58.512Z
