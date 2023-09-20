import { useEffect, useState } from 'react'
import style from './ServiceList.module.css'
import styles from './Clients.module.css'
import { getClientsById } from '../../../redux/actions'
import { useDispatch } from 'react-redux'

interface Props {
  clients: any[]
  id: string | undefined
}

const Clients: React.FC<Props> = ({ clients, id }) => {
  const dispatch = useDispatch()
  const [openClientIndex, setOpenClientIndex] = useState<number | null>(null)

  useEffect(() => {
    dispatch(getClientsById(id))
  }, [])

  const ClientView = (index: number): void => {
    if (openClientIndex === index) {
      setOpenClientIndex(null)
    } else {
      setOpenClientIndex(index)
    }
  }

  return (
    <div className={style['seller-services-container']}>
      <div className={style['seller-services-header']}>
        <h2>Clients</h2>
      </div>
      <ul className={style['service-list']}>
        {clients.map((client, index) => (
          <>
            <li key={client.id} className={style['service-item']}>
              <span className={style['list-number']}> {index + 1}</span>
              <img className={styles['client-image']} src={client.image} />
              <span className={style['service-name']}> {client.name + client.lastName}</span>
              <button
                className={style['edit-button']}
                onClick={() => {
                  ClientView(index)
                }}
              >
                View
              </button>
            </li>

            {openClientIndex === index && (
              <div className={styles.userdetail}>
                <div className={styles['userdetail-header']}>
                  <img src={client.image} alt={client.name} />
                  <h3>
                    {client.name} {client.lastName === 'apellido' ? '' : client.lastName}
                  </h3>
                </div>

                <div className={styles['userdetail-body']}>
                  <ul>
                    <li>
                      Name <span>{client.name}</span>
                    </li>
                    <li>
                      Last Name <span>{client.lastName}</span>
                    </li>
                    <li>
                      Phone <span>{client.phoneNumber}</span>
                    </li>
                    <li>
                      Email <span>{client.email}</span>
                    </li>
                    <li>
                      Birthdate <span>{client.dateOfBirth.slice(0, 10)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </>
        ))}
      </ul>
    </div>
  )
}

export default Clients
