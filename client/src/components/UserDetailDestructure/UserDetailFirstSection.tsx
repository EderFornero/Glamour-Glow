// components
import Cloudinary from '../../components/Cloudinary/Cloudinary'
// assets
import noProfileImage from '../../assets/UserDetail/no-profile-image.png'
// css
import styles from './UserDetailDestructure.module.css'
// redux
import type { RootState } from '../../redux/types'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getUserbyId, updateUserInfo } from '../../redux/Actions'

const UserDetailFirstSection = (): JSX.Element => {
  const dispatch = useDispatch()
  const { image } = useSelector((state: RootState) => state)
  const userdetail = useSelector((state: RootState) => state.userdetail)

  const [editing, setEditing] = useState(false)
  const [newUserInfo, setNewUserInfo] = useState({})

  const id = '64f2ae11703644223782e8c2'
  useEffect(
    () => {
      dispatch(getUserbyId(id))
    }, [dispatch]
  )

  const handleEdit = () => {
    setEditing(true)
    setNewUserInfo({ ...userdetail })
  }

  const handleSave = () => {
    setEditing(false)
    dispatch(updateUserInfo(id, newUserInfo))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewUserInfo(() => ({ ...newUserInfo, [name]: value }))
  }

  return (
        <section className={styles.sectionleft}>
            <div className={styles.userdetail}>
                <div className={styles['userdetail-header']}>
                    <img src={image ?? noProfileImage} alt='Profile' />
                    <Cloudinary />
                    <h1> {editing ? ( <input type="text" name="username" value={newUserInfo.username || ''} onChange={handleChange} />
                    ) : (
                      newUserInfo.username ? newUserInfo.username : userdetail.username
                    )} </h1>
                    {editing ? (
                        <a onClick={handleSave}>Save</a>
                    ) : (
                        <a onClick={handleEdit}>Edit basic information</a>
                    )}
                </div>
                <div className={styles['userdetail-body']}>
                <ul>
                  <li>Name <span>{editing ? ( <input type="text" name="name" value={newUserInfo.fullname} onChange={handleChange} />
  ) : (
    newUserInfo.fullname ? newUserInfo.fullname : userdetail.fullname
  )}</span></li>
  <li>Last Name <span>{editing ? (
    <input type="text" name="fullname" value={newUserInfo.fullname} onChange={handleChange} />
  ) : (
    newUserInfo.fullname ? newUserInfo.fullname : userdetail.fullname
  )}</span></li>
  <li>Phone <span>{editing ? (
    <input type="text" name="phone" value={newUserInfo.phone} onChange={handleChange} />
  ) : (
    newUserInfo.phone ? newUserInfo.phone : userdetail.phone
  )}</span></li>
  <li>Email <span>{editing ? (
    <input type="text" name="email" value={newUserInfo.email} onChange={handleChange} />
  ) : (
    newUserInfo.email ? newUserInfo.email : userdetail.email
  )}</span></li>
  <li>Birthdate <span>{editing ? (
    <input type="text" name="birthdate" value={newUserInfo.date_of_birth} onChange={handleChange} />
  ) : (
    newUserInfo.date_of_birth ? newUserInfo.date_of_birth : userdetail.date_of_birth
  )}</span></li>
  <li>Gender <span>{editing ? (
    <input type="text" name="gender" value={newUserInfo.gender} onChange={handleChange} />
  ) : (
    newUserInfo.gender ? newUserInfo.gender : userdetail.gender
  )}</span></li>
</ul>

                </div>
                <div className={styles['userdetail-bottom']}>
                    <a>Sign Out</a>
                </div>
            </div>
        </section>
  )
}

export default UserDetailFirstSection
