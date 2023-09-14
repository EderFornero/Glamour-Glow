import { useState } from 'react'
import style from './ServiceList.module.css'

interface Props {
  sellerName: string
  services: any[]
}

const Clients: React.FC<Props> = ({ services }) => {
  const [editedServiceId, setEditedServiceId] = useState<number | null>(null)

  const handleEditClick = (id: number): void => {
    setEditedServiceId(id)
  }

  const handleDeleteClick = (id: number): void => {
    console.log(`Eliminar servicio con ID: ${id}`)
  }

  return (
    <div className={style['seller-services-container']}>
      <div className={style['seller-services-header']}>
        <h2>Clients</h2>
      </div>
      <ul className={style['service-list']}>
        {services.map((service, index) => (
          <li key={service.id} className={style['service-item']}>
            {editedServiceId === service.id ? (
              <>
                <input
                  type='text'
                  value={service.name}
                  onChange={(e) => {
                    console.log(`Editar servicio con ID ${service.id}: ${e.target.value}`)
                  }}
                />
                <button
                  onClick={() => {
                    setEditedServiceId(null)
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span> {index + 1}</span>
                <span className={style['service-name']}> {service.name}</span>
                <button
                  className={style['edit-button']}
                  onClick={() => {
                    handleEditClick(service.id)
                  }}
                >
                  View
                </button>
                <button
                  className={style['delete-button']}
                  onClick={() => {
                    handleDeleteClick(service.id)
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Clients
