import { useState } from 'react'
import style from './ServiceList.module.css'

interface Service {
  id: number
  name: string
  price: number
  description: string
  serviceCategories: string
}

interface Props {
  sellerName: string
  services: Service[]
  setActiveItem: (activeItem: string) => void
}

const SellerServices: React.FC<Props> = ({ sellerName, services, setActiveItem }) => {
  const [ServiceId, setServiceId] = useState<string | null>(null)
  const [Service, setService] = useState<Service | null>(null)

  const handleEditClick = (id: any): void => {
    const serviceToEdit = services.find((service) => service.name === id)
    if (serviceToEdit !== null) {
      setServiceId(id)
      setService(serviceToEdit)
    }
  }

  const handleSaveClick = (): void => {
    if (Service !== null) {
      console.log('Guardar cambios:', Service)
    }
    setServiceId(null)
    setService(null)
  }

  const handleCancelClick = (): void => {
    setServiceId(null)
    setService(null)
  }

  const handleDeleteClick = (id: any): void => {
    console.log(`Eliminar servicio con ID: ${id}`)
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
        <h2>Servicios de {sellerName}</h2>
        <button onClick={() => { setActiveItem('Create') }}>ADD NEW</button>
      </div>
      <ul className={style['service-list']}>
        {services.map((service, index) => (
          <li key={service.name} className={style['service-item']}>
            {ServiceId === service.name
              ? (<>
              <span> {index + 1}</span>
              <div>
                <input type="text" name="name" value={Service?.name} onChange={handleChange}/>
                <input type="text" name="description" value={Service?.description} onChange={handleChange}/>
                <input type="text" name="serviceCategories" value={Service?.serviceCategories} onChange={handleChange}/>
              </div>
                <input type="text" name="price" value={Service?.price.toString()} onChange={handleChange}/>
                <button onClick={handleSaveClick}>Guardar</button>
                <button onClick={handleCancelClick}>Cancelar</button>
              </>)
              : (
              <>
                <span> {index + 1}</span>
                <div>
                  <span className={style['service-name']}> {service.name}</span>
                  <span className={style['service-description']}> {service.description}</span>
                </div>
                <span className={style['service-price']}> $ {service.price}</span>
                <button className={style['edit-button']} onClick={() => { handleEditClick(service.name) }}>Editar</button>
                <button className={style['delete-button']} onClick={() => { handleDeleteClick(service.name) }}>Eliminar</button>
              </>
                )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SellerServices
