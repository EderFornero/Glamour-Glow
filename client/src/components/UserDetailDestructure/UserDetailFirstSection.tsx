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
import { getUserbyId, updateUserInfo, setAuth } from '../../redux/actions'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetailFirstSection = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { image } = useSelector((state: RootState) => state)
  const userdetail = useSelector((state: RootState) => state.userdetail)

  const [editing, setEditing] = useState(false)
  const [newUserInfo, setNewUserInfo] = useState({ ...userdetail })

  const { id } = useParams()

  console.log(newUserInfo)

  useEffect(() => { image ?? dispatch(updateUserInfo(id, { 'image': image })) }
    , [image])

  useEffect(() => {
    dispatch(getUserbyId(id))
  }, [dispatch])

  const handleLogout = (): void => {
    dispatch(setAuth(false))
    localStorage.removeItem('isAuth')
    navigate('/')
  }

  const handleEdit = (): void => {
    setEditing(true)
    setNewUserInfo({ ...userdetail })
  }

  const handleSave = (): void => {
    setEditing(false)
    dispatch(updateUserInfo(id, newUserInfo))
  }

  const handleChange = (event: any): void => {
    const { name, value } = event.target
    setNewUserInfo(() => ({ ...newUserInfo, [name]: value }))
  }

  const formatDateNumbers = (birthdate: any): string => {
    const date = new Date(birthdate)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <section className={styles.sectionleft}>
      <div className={styles.userdetail}>
        <div className={styles['userdetail-header']}>
          <img src={userdetail.image ?? noProfileImage} alt='Profile' />
          <Cloudinary />
          <h1>
            {userdetail.name} {userdetail.lastName}
          </h1>
          {editing ? <a onClick={handleSave}>Save</a> : <a onClick={handleEdit}>Edit basic information</a>}
        </div>
        <div className={styles['userdetail-body']}>
          <ul>
            <li>
              Name <span>{editing ? <input type='text' name='name' value={newUserInfo.name} onChange={handleChange} /> : userdetail.name}</span>
            </li>
            <li>
              Last Name <span>{editing ? <input type='text' name='lastName' value={newUserInfo.lastName} onChange={handleChange} /> : userdetail.lastName}</span>
            </li>
            <li>
              Phone <span>{editing ? <input type='number' name='phoneNumber' value={newUserInfo.phoneNumber} onChange={handleChange} /> : userdetail.phoneNumber}</span>
            </li>
            <li>
              Email <span>{editing ? <input type='text' name='email' value={newUserInfo.email} onChange={handleChange} disabled /> : userdetail.email}</span>
            </li>
            <li>
              Birthdate <span>{editing ? <input type='date' name='dateOfBirth' value={newUserInfo.dateOfBirth} onChange={handleChange} /> : formatDateNumbers(userdetail.dateOfBirth)}</span>
            </li>
          </ul>
        </div>
        <div className={styles['userdetail-bottom']} onClick={handleLogout}>
          <a>Sign Out</a>
        </div>
      </div>
    </section>
  )
}

export default UserDetailFirstSection
