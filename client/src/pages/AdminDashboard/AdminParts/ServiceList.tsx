import { useState } from 'react'
import style from './ServiceList.module.css'

interface Service {
  id: number
  name: string
}

interface Props {
  sellerName: string
  services: Service[]
}

const SellerServices: React.FC<Props> = ({ sellerName, services, setActiveItem }) => {
  const [editedServiceId, setEditedServiceId] = useState<number | null>(null)
  
  console.log(services)

  const handleEditClick = (id: number) => {
    setEditedServiceId(id)
  }

  const handleDeleteClick = (id: number) => {
    console.log(`Eliminar servicio con ID: ${id}`)
  }

  return (
    <div className= {style['seller-services-container']}>
      <div className= {style['seller-services-header']}>
        <h2>Servicios de {sellerName}</h2>
        <button onClick={()=>setActiveItem('Create')}>ADD NEW</button>
      </div>
      <ul className={style['service-list']}>
        {services.map((service, index) => (
          <li key={service.id} className={style['service-item']}>
            {editedServiceId === service.id
              ? (<>
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => {
                    console.log(`Editar servicio con ID ${service.id}: ${e.target.value}`)
                  }}
                />
                <button onClick={() => setEditedServiceId(null)}>Guardar</button>
              </>)
              : (
              <>
                <span> {index + 1}</span>
                <span className={style['service-name']}> {service.name}</span>
                <span className={style['service-price']}> $ {service.price}</span>
                <button className={style['edit-button']} onClick={() => handleEditClick(service.id)}>Editar</button>
                <button className={style['delete-button']} onClick={() => handleDeleteClick(service.id)}>Eliminar</button>
              </>
                )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SellerServices
