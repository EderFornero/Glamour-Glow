import style from './ServiceList.module.css'

interface Props {
  clients: any[]
}

const Clients: React.FC<Props> = ({ clients }) => {
  return (
    <div className={style['seller-services-container']}>
      <div className={style['seller-services-header']}>
        <h2>Clients</h2>
      </div>
      <ul className={style['service-list']}>
        {clients.map((client, index) => (
          <li key={client.id} className={style['service-item']}>
            <span className={style['list-number']}> {index + 1}</span>
                <span className={style['service-name']}> {client.name}</span>
                <button className={style['edit-button']}>
                  View
                </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Clients
