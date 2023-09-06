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
import { UserDetail } from '../../redux/types'
import { useParams } from 'react-router-dom'

const UserDetailFirstSection = (): JSX.Element => {
  const dispatch = useDispatch()
  const { image } = useSelector((state: RootState) => state)
  const userdetail = useSelector((state: RootState) => state.userdetail)

  const [editing, setEditing] = useState(false)
  const [newUserInfo, setNewUserInfo] = useState<UserDetail>({ ...userdetail })

  const { id } = useParams()

  useEffect(
    () => {
      dispatch(getUserbyId(id))
    }, [dispatch]
  )

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
                    <img src={image ?? noProfileImage} alt='Profile' />
                    <Cloudinary />
                    <h1> {editing
                      ? (<input type="text" name="name" value={newUserInfo.name} onChange={handleChange} />)
                      : (`${userdetail.name} ${userdetail.last_name}`) } </h1>
                    {editing
                      ? (<a onClick={handleSave}>Save</a>)
                      : (<a onClick={handleEdit}>Edit basic information</a>)}
                </div>
                <div className={styles['userdetail-body']}>
                <ul>
                  <li>Name <span>{editing
                    ? (<input type="text" name="name" value={newUserInfo.name} onChange={handleChange} />)
                    : (userdetail.name)}</span></li>
                  <li>Last Name <span>{editing
                    ? (<input type="text" name="last_name" value={newUserInfo.last_name} onChange={handleChange} />)
                    : (userdetail.last_name)}</span></li>
                  <li>Phone <span>{editing
                    ? (<input type="text" name="phone_number" value={newUserInfo.phone_number} onChange={handleChange} />)
                    : (userdetail.phone_number)}</span></li>
                  <li>Email <span>{editing
                    ? (<input type="text" name="email" value={newUserInfo.email} onChange={handleChange} disabled/>)
                    : (userdetail.email)}</span></li>
                  <li>Birthdate <span>{editing
                    ? (<input type="text" name="date_of_birth" value={newUserInfo.date_of_birth} onChange={handleChange} />)
                    : (formatDateNumbers(userdetail.date_of_birth))}</span></li>
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
