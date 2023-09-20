import axios from '../redux/axiosService'
const API_URL = import.meta.env.VITE_SERVER_URL
export const postFavourite = async (userId: string, sellerId: string | undefined): Promise<void> => {
  try {
    const endpoint = `${API_URL}favorites`
    await axios.post(endpoint, { userId, sellerId })
  } catch (error) {}
}
