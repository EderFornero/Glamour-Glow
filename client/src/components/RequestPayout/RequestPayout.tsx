import style from './RequestPayout.module.css'
import toast, { Toaster } from 'react-hot-toast'
import axios from '../../redux/axiosService'
const API_URL = import.meta.env.VITE_SERVER_URL

const RequestPayout: React.FC<any> = ({ balance, id, sellerName, sellerPhone }) => {
  const handleSubmit = async (): Promise<void> => {
    const endpoint = `${API_URL}paymentRequested`
    try {
      const success = await axios.post(endpoint, { balance, id, sellerName, sellerPhone })
      if (success !== null) {
        toast.success('Request successful. Email has been sent')
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
      <p>{`${balance}.- will be deducted from your account`}</p>
      <button type='submit' className={style.submit}>
        Request
      </button>
    </form>
  )
}

export default RequestPayout
