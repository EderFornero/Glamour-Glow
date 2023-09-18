import React, { useEffect, useState } from 'react'
import { useGoBack } from '../../hooks'
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

interface FormLoginProps {
  onToggle: () => void
}

const FormBusiness: React.FC<FormLoginProps> = () => {
  const dispatch = useDispatch()
  const goBack = useGoBack()
  const navigate = useNavigate()
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
  console.log(image)

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
    console.log(data)
    const response = await dispatch(postSeller(data))
    console.log(response.data)
    try {
      console.log(autoLoginSeller)
      const response = await dispatch(postSellerValidate(autoLoginSeller))
      const { id, token, role } = response.data
      console.log(response.data)

      if (token !== undefined && id !== undefined) {
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('id', id)
        localStorage.setItem('role', role)
        dispatch(setAuth(true))
        dispatch(setUserId(id))
        navigate('/')
      }
    } catch (error: any) {
      console.log(error)
    }
  })

  const toggleOtherInputs = (): void => {
    setShowOtherInputs(!showOtherInputs)
  }

  return (
    <div className={style.all}>
      <div className={style.content}>
        <div className={style.left}>
          <h1 className={style.h1}>Share your skills with the world!</h1>
        </div>
        <div className={style.right}>
          <div className={style['div-right']}>
            <div className={style.text}>
              <h2 className={style.h2}>Tell us about your work</h2>
            </div>
            <form onSubmit={onSubmit} className={style.forms}>
              <BusiCategoriesInput
                register={register}
                errors={errors}
                categoryList={categoryList}
                toggleOtherInputs={toggleOtherInputs}
              />
              {showOtherInputs && (
                <>
                  <BusiNameInput register={register} errors={errors} />
                  <BusiEmailInput register={register} errors={errors} />
                  <BusiPhoneInput register={register} errors={errors} />
                  <BusiPasswordInput register={register} errors={errors} />
                  <BusiGenderInput register={register} errors={errors} />
                  <Cloudinary />
                  {errors.images !== undefined && (
                  <span>Image required</span>
                  )}
                </>
              )}
              <div className={style['buton-div']}>
                <button className={style.btn} onClick={goBack}>
                  Back
                </button>
                <button className={style.btn} onClick={() => { clearErrors('images') }} type='submit'>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormBusiness
