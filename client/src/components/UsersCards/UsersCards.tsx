import React, { useEffect } from 'react'
import UserCard from '../UserCard/UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/actions'
import style from './UsersCards.module.css'
import type { RootState } from '../../redux/types'

const UsersCards: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className={style.usersContainer}>
      {users.map((user) => (
        <UserCard
          key={user._id}
          _id={user._id}
          name={user.name}
          lastName={user.lastName}
          image={user.image}
          email={user.email}
          phoneNumber={user.phoneNumber}
        />
      ))}
    </div>
  )
}

export default UsersCards
