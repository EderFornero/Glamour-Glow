import React, { useEffect, useState } from 'react'
import { useGoBack } from '../../hooks'
import { useForm } from 'react-hook-form'
import BusiCategoriesInput from './inputs/BusiCategoriesInput'
import BusiGenderInput from './inputs/BusiGenderInput'
import BusiNameInput from './inputs/BusiNameInput'
import BusiEmailInput from './inputs/BusiEmailInput'
import BusiPhoneInput from './inputs/BusiPhoneInput'
import style from './FormCreateBusiness.module.css'
import type { RootState } from '../../redux/types'
import { getCategories, postSeller } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { FormCreateBusi } from '../../interfaces'

const FormBusiness: React.FC = () => {
  const dispatch = useDispatch()
  const goBack = useGoBack()
  const navigate = useNavigate()
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormCreateBusi>({
    defaultValues: {
      sellerName: '',
      sellerEmail: '',
      sellerPhone: '',
      sellerGender: 'any',
      categoriesArray: [],
      servicesArray: []
    }
  })

  const categoryList = useSelector((state: RootState) => state.categories)

  const [arr, setArr] = useState<string[]>([])
  console.log(arr, setArr, watch)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const onSubmit = handleSubmit((data: FormCreateBusi) => {
    //  arr.splice(0, 2)
    //  data.categoriesArray = arr
    console.log(data)
    dispatch(postSeller(data))
    navigate('/')
  })

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
            <form onSubmit={() => onSubmit} className={style.forms}>
              <BusiNameInput register={register} errors={errors} />
              <BusiEmailInput register={register} errors={errors} />
              <BusiPhoneInput register={register} errors={errors} />
              <div className={style['div-inputs-bottom']}>
                <BusiCategoriesInput register={register} errors={errors} categoryList={categoryList} watch={watch} setArr={setArr} />
                <BusiGenderInput register={register} errors={errors} />
              </div>
              <div className={style['buton-div']}>
                <button className={style.btn} onClick={goBack}>
                  Back
                </button>
                <button className={style.btn} type='submit'>
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
