import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BusiCategoriesInput from './inputs/BusiCategoriesInput'
import BusiGenderInput from './inputs/BusiGenderInput'
import BusiNameInput from './inputs/BusiNameInput'
import BusiEmailInput from './inputs/BusiEmailInput'
import BusiPhoneInput from './inputs/BusiPhoneInput'
import BusiPasswordInput from './inputs/BusiPasswordInput'
import style from './FormCreateBusiness.module.css'
import type { RootState } from '../../redux/types'
import { getCategories, postSeller, postSellerValidate, setAuth, setUserId } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { FormCreateBusi } from '../../interfaces'
import Cloudinary from '../Cloudinary/Cloudinary'
import toast, { Toaster } from 'react-hot-toast'
import StandardButton from '../StandardButton/StandardButton'
import { BusinessRegisterImage } from '../../Images/FormImages'

interface FormLoginProps {
  onToggle: () => void
}

const FormBusiness: React.FC<FormLoginProps> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Enter') {
        event.preventDefault()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<FormCreateBusi>({
    defaultValues: {
      sellerName: '',
      sellerEmail: '',
      sellerPassword: '',
      sellerPhone: '',
      role: 'seller',
      images: [],
      sellerGender: '',
      categoriesArray: [],
      servicesArray: [],
      isActive: true,
      confirmPassword: ''
    }
  })

  const autoLoginSeller = {
    sellerEmail: '',
    sellerPassword: ''
  }
  const [showOtherInputs, setShowOtherInputs] = useState(true)
  const categoryList = useSelector((state: RootState) => state.categories)
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const { image } = useSelector((state: RootState) => state)

  const onSubmit = handleSubmit(async (data: FormCreateBusi) => {
    delete data.confirmPassword
    const businessImage: string[] = []
    if (image !== undefined) {
      businessImage.push(image)
    }
    data.images = businessImage

    if (Array.isArray(data.categoriesArray)) {
      data.categoriesArray = data.categoriesArray.filter((item) => typeof item === 'string')
    }
    autoLoginSeller.sellerEmail = data.sellerEmail
    autoLoginSeller.sellerPassword = data.sellerPassword
    if (data.images.length === 0) {
      setError('images', {
        type: 'manual',
        message: 'image required'
      })
      return
    }
    await dispatch(postSeller(data))
    try {
      const response = await dispatch(postSellerValidate(autoLoginSeller))
      const { id, token, role } = response.data

      if (token !== undefined && id !== undefined) {
        toast.success('Successfully registered', {
          style: {
            border: '1px solid #3d36be',
            padding: '16px',
            color: '#1eb66d'
          },
          iconTheme: {
            primary: '#6e66ff',
            secondary: '#FFFAEE'
          }
        })
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('id', id)
        localStorage.setItem('role', role)
        dispatch(setAuth(true))
        dispatch(setUserId(id))
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }
    } catch (error: any) {
      toast.error('Ops! Credential(s) incorrect', {
        style: {
          border: '1px solid #3d36be',
          padding: '16px',
          color: 'red'
        },
        iconTheme: {
          primary: 'red',
          secondary: '#FFFAEE'
        }
      })
    }
  })

  const toggleOtherInputs = (): void => {
    setShowOtherInputs(!showOtherInputs)
  }

  return (
    <div className={style['div-business-register']}>
      <div className={style['div-business-register-container']}>

        <div className={style['image-h3-container']}>
          <h3 className={style['h3-form-user']}>
          Share your skills with the world!
          </h3>
          <img src={BusinessRegisterImage} alt='Business Register' className={style['image-form-user']} />
        </div>

        <div className={style.right}>
          <div className={style['div-right']}>
            <div className={style.text}>
              <h2 className={style.h2}>Tell us about your work</h2>
            </div>
            <form onSubmit={onSubmit} className={style.forms}>
              <BusiCategoriesInput register={register} errors={errors} categoryList={categoryList} toggleOtherInputs={toggleOtherInputs} />
              {showOtherInputs && (
                <>
                  <BusiNameInput register={register} errors={errors} />
                  <BusiEmailInput register={register} errors={errors} />
                  <BusiPhoneInput register={register} errors={errors} />
                  <BusiPasswordInput register={register} errors={errors} />
                  <BusiGenderInput register={register} errors={errors} />
                  <Cloudinary />
                  {errors.images !== undefined && (
                  <span className={style.imgspan}>Image required</span>
                  )}
                  <div className={style['button-div']}>
                    <StandardButton variant='sizeForms' onClick={() => { clearErrors('images') }} type='submit'>
                      Register
                    </StandardButton>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      <div>
        <Toaster position='top-center' reverseOrder={false} />
      </div>
    </div>
  )
}

export default FormBusiness
