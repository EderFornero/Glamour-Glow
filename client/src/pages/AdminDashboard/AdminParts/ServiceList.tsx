import { useEffect, useState } from 'react'
import style from './ServiceList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateService, deleteService, getSellerbyId } from '../../../redux/actions'
import { useParams } from 'react-router-dom'
import type { RootState } from '../../../redux/types'

interface Service {
  _id: string
  name: string
  price: number
  description: string
  serviceCategories: string
}

interface Props {
  sellerid: string
  setActiveItem: (activeItem: string) => void
}

const ServiceList: React.FC<Props> = ({ setActiveItem }) => {
  const [ServiceId, setServiceId] = useState<string | null>(null)
  const [Service, setService] = useState<Service | null>(null)
  const dispatch = useDispatch()
  const { id } = useParams()
  const { servicesArray, sellerName } = useSelector((state: RootState) => state.sellerdetail)

  useEffect(() => {
    dispatch(getSellerbyId(id))
  }, [id])

  const handleEditClick = (id: any): void => {
    const serviceToEdit = servicesArray.find((service: any) => service._id === id)
    if (serviceToEdit !== null) {
      setServiceId(id)
      setService(serviceToEdit)
    }
  }

  const handleSaveClick = (): void => {
    if (Service !== null) {
      dispatch(updateService(ServiceId, Service))
    }
    setServiceId(null)
    setService(null)
  }

  const handleCancelClick = (): void => {
    setServiceId(null)
    setService(null)
  }

  const handleDeleteClick = (ServiceId: any): void => {
    dispatch(deleteService(ServiceId))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setService((prevService) => ({
      ...prevService,
      [name]: name === 'price' ? parseFloat(value) : value
    }) as Service)
  }

  return (
    <div className= {style['seller-services-container']}>
      <div className= {style['seller-services-header']}>
        <h2>{sellerName}&apos;s Services</h2>
        <button onClick={() => { setActiveItem('Create') }}>ADD NEW</button>
      </div>
      <ul className={style['service-list']}>
        {servicesArray.map((service, index) => (
          <li key={service._id} className={style['service-item']}>
            <span className={style['list-number']}> {index + 1}</span>
            {ServiceId === service._id
              ? (<>
              <div className={style['service-left']}>
                <input type="text" name="name" value={Service?.name} onChange={handleChange}/>
                <input type="text" name="description" value={Service?.description} onChange={handleChange}/>
              </div>
                $ <input className={style['price-input']} type="number" name="price" value={Service?.price.toString()} onChange={handleChange}/>
              <div className={style['service-buttons']}>
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
              </>)
              : (
              <>
                <div className={style['service-left-full']}>
                  <span className={style['service-name']}> {service.name}</span>
                  <span className={style['service-description']}> {service.description}</span>
                </div>
                <span className={style['service-price']}> $ {service.price}</span>
                <div className={style['service-rigth-full']}>
                  <button className={style['edit-button']} onClick={() => { handleEditClick(service._id) }}>Edit</button>
                  <button className={style['delete-button']} onClick={() => { handleDeleteClick(service._id) }}>Delete</button>
                </div>
              </>
                )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceList
