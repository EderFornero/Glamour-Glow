import axios from '../redux/axiosService'
const API_URL = import.meta.env.VITE_SERVER_URL

export const removeFavourite = async (favouriteId: string): Promise<void> => {
  try {
    const endpoint = `${API_URL}favorites/${favouriteId}`
    await axios.delete(endpoint, {
      data: {
        favouriteId
      }
    })
  } catch (error) {}
}
