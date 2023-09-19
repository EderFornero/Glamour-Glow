import { useEffect, useState } from 'react'
import style from './ServiceList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateService, deleteService, getSellerbyId } from '../../../redux/actions'
import { useParams } from 'react-router-dom'
import type { RootState } from '../../../redux/types'
import toast, { Toaster } from 'react-hot-toast'

interface ServiceData {
  name: string
  price: string
  description: string
}

interface Props {
  sellerid: string
  setActiveItem: (activeItem: string) => void
}

const ServiceList: React.FC<Props> = ({ setActiveItem }) => {
  const [ServiceId, setServiceId] = useState<string | null>(null)
  const [Service, setService] = useState<ServiceData>({
    name: '',
    description: '',
    price: ''
  })
  const dispatch = useDispatch()
  const { id } = useParams()
  const { servicesArray, sellerName } = useSelector((state: RootState) => state.sellerdetail)

  useEffect(() => {
    dispatch(getSellerbyId(id))
  }, [Service, dispatch])

  const handleEditClick = (id: any): void => {
    const serviceToEdit = servicesArray.find((service: any) => service._id === id)
    if (serviceToEdit !== null) {
      setServiceId(id)
      setService({
        name: serviceToEdit.name,
        description: serviceToEdit.description,
        price: serviceToEdit.price
      })
    }
  }

  const handleSaveClick = async (): Promise<void> => {
    try {
      const response = await dispatch(updateService(ServiceId, Service))

      if (response.success === true) {
        setServiceId(null)
        setService({
          name: '',
          description: '',
          price: ''
        })
        toast.success('Successfully edited', {
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
      }
    } catch (error) {
      toast.error('Ops! Something went wrong', {
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
  }

  const handleCancelClick = (): void => {
    setServiceId(null)
    setService({
      name: '',
      description: '',
      price: ''
    })
  }

  const handleDeleteClick = async (ServiceId: any): Promise<void> => {
    const isConfirmed = window.confirm('Are you sure you want to delete this service?')
    if (isConfirmed) {
      try {
        const response = await dispatch(deleteService(ServiceId))

        if (response.success === true) {
          toast.success('Successfully deleted', {
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
          dispatch(getSellerbyId(id))
        }
      } catch (error) {
        toast.error('Ops! Something went wrong', {
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
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setService((prevService) => ({
      ...prevService,
      [name]: value
    }))
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
                  <button className={style['delete-button']} onClick={() => { void handleDeleteClick(service._id) }}>Delete</button>
                </div>
              </>
                )}
          </li>
        ))}
      </ul>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>
  )
}

export default ServiceList
