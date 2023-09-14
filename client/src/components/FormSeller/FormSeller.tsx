import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import style from './FormSeller.module.css'
import type { RootState } from '../../redux/types'
import { getCategories, postService } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import type { SellerData } from '../../interfaces'
import ServiceNameInput from './inputs/ServiceNameInput'
import ServiceDescriptionInput from './inputs/ServiceDescriptionInput'
import ServiceCategoriesInput from './inputs/ServiceCategoryInput'
import ServicePriceInput from './inputs/ServicePriceInput'
import { createServiceImage } from '../../Images/FormImages'

const FormSeller: React.FC = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SellerData>({
    defaultValues: {
      name: '',
      description: '',
      serviceCategories: '',
      price: '',
      seller: ''
    }
  })

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const categoryList = useSelector((state: RootState) => state.categories)

  const onSubmit = handleSubmit((data: SellerData) => {
    const idSeller = localStorage.getItem('id')
    data.seller = idSeller
    console.log(data)
    dispatch(postService(data))
  })

  return (
    <div className={style.all}>
      <div className={style.content}>
        <div className={style['content-left']}>
          <h2 className={style.tex}>Please enter basic information about your service</h2>
          <img src={createServiceImage}/>
        </div>

        <div className={style['content-right']}>
            <form className={style.form} onSubmit={onSubmit}>
              <div className={style.inputContainer}>
                <p className={style.text}>Service Name:</p>
                <ServiceNameInput register={register} errors={errors} />
              </div>
              <div className={style.inputContainer}>
                <p className={style.text}>Service Price:</p>
                <ServicePriceInput register={register} errors={errors} />
              </div>
              <div className={style.inputContainer}>
                <p className={style.text}>Service Category:</p>
                <ServiceCategoriesInput register={register} errors={errors} categoryList={categoryList} />
              </div>
              <div className={style.inputContainer}>
                <p className={style.text}>Service Description:</p>
                <ServiceDescriptionInput register={register} errors={errors} />
              </div>
              <button className={style.submit} type='submit'>Add Service</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default FormSeller
