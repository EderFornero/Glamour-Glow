import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/actions'
import style from './UsersCards.module.css'
import type { RootState } from '../../redux/types'
import EnhancedTable from '../UsersTable/UsersTable'

const UsersCards: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [users])

  const reversedUsers = [...users].reverse()

  const rows = reversedUsers.map((user) => ({
    _id: user._id,
    name: user.name,
    lastName: user.lastName,
    image: user.image,
    email: user.email,
    phoneNumber: user.phoneNumber,
    dateOfBirth: user.dateOfBirth,
    isActive: user.isActive,
    role: user.role,
    createdAt: user.createdAt
  }))

  return (
    <div className={style.usersContainer}>
      <EnhancedTable rows={rows} />
    </div>
  )
}

export default UsersCards
