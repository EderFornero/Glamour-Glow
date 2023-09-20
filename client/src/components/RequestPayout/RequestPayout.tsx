import style from './RequestPayout.module.css'
import toast, { Toaster } from 'react-hot-toast'
import axios from '../../redux/axiosService'
import Loader from '../Loader/Loader'
import { useState } from 'react'
import { requestPayoutImage } from '../../Images/FormImages'
const API_URL = import.meta.env.VITE_SERVER_URL

interface RequestPayoutProps {
  accountBalance: number
  sellerName: string
  sellerPhone: string
}

const RequestPayout: React.FC<RequestPayoutProps> = ({ accountBalance, sellerName, sellerPhone }) => {
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const endpoint = `${API_URL}paymentRequested`
    setLoading(true)
    try {
      event.preventDefault()
      const success = await axios.post(endpoint, { accountBalance, sellerName, sellerPhone })
      if (success !== null) {
        toast.success('Request successful. Email has been sent', {
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
        setLoading(false)
      }
    } catch (error) {
      toast.error('E-mail was not sent. Please try again', {
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

  return (
    <div className={style.global}>
      <img src={requestPayoutImage} alt='Request Payout' className={style.image} />
      <form onSubmit={handleSubmit} className={style.form}>
        <Toaster />
        <h2 className={style.title}>You are about to request a payment</h2>
        <p>{`$${accountBalance}.- will be deducted from your account. Please confirm you want to perform this action`}</p>
        <button type='submit' className={style.submit}>
          {loading ? <Loader /> : 'Request'}
        </button>
      </form>
    </div>
  )
}

export default RequestPayout
