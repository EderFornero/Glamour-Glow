import { useParams } from 'react-router-dom'
import DatePickUI from '../../assets/booking/undraw_booking_re_gw4j.svg'
import FancyUI from '../../assets/booking/undraw_date_picker_re_r0p8.svg'
import 'react-datepicker/dist/react-datepicker.css'
import { initMercadoPago } from '@mercadopago/sdk-react'
import axios from 'axios'

import style from './BookAService.module.css'
const API_URL = import.meta.env.VITE_SERVER_URL
const MERCADO_PAGO = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY

const BookAService = (): JSX.Element => {
  const { name, price, sellerId } = useParams()

  initMercadoPago(`${MERCADO_PAGO}`)

  const createPreference = async (): Promise<any> => {
    try {
      const response = await axios.post(`${API_URL}payment/order`, {
        title: name,
        unit_price: price,
        currency_id: 'ARS',
        quantity: 1,
        sellerId
      })
      const id = response.data
      return id
    } catch (error) {
      console.log(error)
    }
  }

  const handleBuy = async (): Promise<void> => {
    const id = await createPreference()
    if (id !== null) {
      window.location.href = id
    }
  }

  return (
    <section className={style['global-container']}>
      <div className={style.form}>
        <h2 className={style.title}>{`Thank you for booking the ${name} service`}</h2>
        <p className={style.price}>{`The cost of the service is: $${price}`}</p>
        <button onClick={handleBuy} type='button' className={style['submit-button']}>
          Book Now
        </button>
      </div>
      <div className={style['image-container']}>
        <img src={DatePickUI} alt='choose-service' />
        <img src={FancyUI} alt='datepicker' />
      </div>
    </section>
  )
}

export default BookAService
