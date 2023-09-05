// components
import Cloudinary from '../../components/Cloudinary/Cloudinary'
// assets
import noProfileImage from '../../assets/UserDetail/no-profile-image.png'
// css
import styles from './UserDetailDestructure.module.css'
// redux
import type { RootState } from '../../redux/types'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'


const UserDetailFirstSection = (): JSX.Element => {
    const { image } = useSelector((state: RootState) => state)

    const dispatch = useDispatch()
    const [editing, setEditing] = useState(false)
    const [newUserInfo, setNewUserInfo] = useState({
        username: '',
        name: '',
        fullname: '',
        phone: '',
        email: '',
        birthdate: '',
        gender: ''
    })

    const handleEdit = () => {
        //dispatch(updateuserdetail(newUserInfo))
        setEditing(true)
    }

    const handleSave = () => {
        setEditing(false)
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
                    <h1>UserName {editing ? <input type="text" name="username" value={newUserInfo.username} onChange={handleChange} /> : <span>{newUserInfo.username}</span>}</h1>
                    {editing ? (
                        <a onClick={handleSave}>Save</a>
                    ) : (
                        <a onClick={handleEdit}>Edit basic information</a>
                    )}
                </div>
                <div className={styles['userdetail-body']}>
                    <ul>
                        <li>Name {editing ? <input type="text" name="name" value={newUserInfo.name} onChange={handleChange} /> : <span>{newUserInfo.name}</span>}</li>
                        <li>Full Name {editing ? <input type="text" name="fullName" value={newUserInfo.fullname} onChange={handleChange} /> : <span>{newUserInfo.fullname}</span>}</li>
                        <li>Phone {editing ? <input type="text" name="phone" value={newUserInfo.phone} onChange={handleChange} /> : <span>{newUserInfo.phone}</span>}</li>
                        <li>Email {editing ? <input type="text" name="email" value={newUserInfo.email} onChange={handleChange} /> : <span>{newUserInfo.email}</span>}</li>
                        <li>Birthdate {editing ? <input type="text" name="birthdate" value={newUserInfo.birthdate} onChange={handleChange} /> : <span>{newUserInfo.birthdate}</span>}</li>
                        <li>Gender {editing ? <input type="text" name="gender" value={newUserInfo.gender} onChange={handleChange} /> : <span>{newUserInfo.gender}</span>}</li>
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
