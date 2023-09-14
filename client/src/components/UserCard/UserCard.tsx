import React from 'react'
import type { UserCardProps } from '../../interfaces/props'
import style from './UserCard.module.css'
import { useDispatch } from 'react-redux'
import { deleteUser, disableUser } from '../../redux/actions'

const UserCard: React.FC<UserCardProps> = ({ name, lastName, email, image, _id, phoneNumber }) => {
  const dispatch = useDispatch()

  const handleDelete = (_id: string): void => {
    dispatch(deleteUser(_id))
    console.log(_id)
  }

  const handleDisable = (_id: string): void => {
    dispatch(disableUser(_id))
    console.log(_id)
  }

  return (
    <div className={style.all}>
      <img className={style.img} src={image} alt={name} />
      <p className={style.text}>{name} {lastName}</p>
        <div className={style['email-div']}>
          <div className={style.phone}></div><p>{phoneNumber}</p>
        </div>
        <div className={style['email-div']}>
            <div className={style.email}></div><p className={style['txt-email']}>{email}</p>
        </div>
          <div className={style.bottom}>
            <button className={style['btn-delete']} onClick={(): void => { handleDelete(_id) }}>Delete</button>
            <button className={style['btn-disable']} onClick={(): void => { handleDisable(_id) }}>Disable</button>
          </div>
    </div>
  )
}

export default UserCard
