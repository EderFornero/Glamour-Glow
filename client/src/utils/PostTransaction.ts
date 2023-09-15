import axios from '../redux/axiosService'
const API_URL = import.meta.env.VITE_SERVER_URL

export const postTransaction = async (transactionId: string | null, userId: string, sellerId: string, price: string | null, status: string | null): Promise<void> => {
  const endpoint = `${API_URL}users/transactions`
  await axios.post(endpoint, { transactionId, userId, sellerId, price, status })
}
