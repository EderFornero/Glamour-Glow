import { useState } from 'react'
import { useParams } from 'react-router-dom'
import DatePickUI from '../../assets/booking/undraw_booking_re_gw4j.svg'
import FancyUI from '../../assets/booking/undraw_date_picker_re_r0p8.svg'
import 'react-datepicker/dist/react-datepicker.css'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'

import style from './BookAService.module.css'

const BookAService = (): JSX.Element => {
  const { name, price } = useParams()
  const [preferenceId, setPreferenceId] = useState<null>(null)

  initMercadoPago('TEST-dfb77c55-b723-4977-b312-5dbc4f1fd759')

  const createPreference = async (): Promise<any> => {
    try {
      const response = await axios.post('http://localhost:3001/payment/order', {
        title: name,
        unit_price: price,
        currency_id: 'ARS',
        quantity: 1
      })

      const { id } = response.data
      return id
    } catch (error) {
      console.log(error)
    }
  }

  const handleBuy = (): void => {
    createPreference()
      .then((id) => {
        if (id !== null) {
          setPreferenceId(id)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <section className={style['global-container']}>
      <form className={style.form}>
        <h2 className={style.title}>{`Thank you for booking the ${name} service`}</h2>
        <p className={style.price}>{`The cost of the service is: $${price}`}</p>
        <button onClick={handleBuy} type='submit' className={style['submit-button']}>
          Book Now
        </button>

        {preferenceId !== null && <Wallet initialization={{ preferenceId }} />}
      </form>
      <div className={style['image-container']}>
        <img src={DatePickUI} alt='choose-service' />
        <img src={FancyUI} alt='datepicker' />
      </div>
    </section>
  )
}

export default BookAService
