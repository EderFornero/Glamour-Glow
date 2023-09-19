import style from './RequestPayout.module.css'
import toast, { Toaster } from 'react-hot-toast'
import axios from '../../redux/axiosService'
import Loader from '../Loader/Loader'
import { useState } from 'react'
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
        toast.success('Request successful. Email has been sent')
        setLoading(false)
      }
    } catch (error) {
      toast.error('E-mail was not sent. Please try again')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Toaster
        toastOptions={{
          style: {
            marginTop: '100px'
          }
        }}
      />
      <h2 className={style.title}>You are about to request a payment</h2>
      <p>{`$${accountBalance}.- will be deducted from your account`}</p>
      <button type='submit' className={style.submit}>
        {loading ? <Loader /> : 'Request'}
      </button>
    </form>
  )
}

export default RequestPayout
