import axios from 'axios'
const API_URL = import.meta.env.VITE_SERVER_URL

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendWelcomeEmail = async (recipientEmail: string) => {
  // eslint-disable-next-line no-useless-catch
  const response = await axios.post(`${API_URL}welcomeEmail`, {
    recipientEmail
  })
  console.log(response)
  return response
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendResetPasswordEmail = async (email: string) => {
  // eslint-disable-next-line no-useless-catch
  const response = await axios.post(`${API_URL}users/forgotPassword`, {
    email
  })
  console.log(response)
  return response
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const confirmResetPassword = async (id: any, passwordResetCode: any, password: string, passwordConfirmation: string) => {
  // eslint-disable-next-line no-useless-catch
  const url = `${API_URL}users/resetPassword/${id}/${passwordResetCode}`
  const data = { password, passwordConfirmation }

  const response = await axios.post(url, data)
  return response
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const paymentConfirmation = async (userEmail: string, price: string, sellerEmail: string, sellerPhone: string, sellerName: string, service: string) => {
  // eslint-disable-next-line no-useless-catch
  const url = `${API_URL}successfulPayment`
  const data = { userEmail, price, sellerEmail, sellerPhone, sellerName, service }
  const response = await axios.post(url, data)
  return response
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendSellerEmail = async (userEmail: string, price: string, sellerEmail: string, userPhone: string, userName: string, service: string) => {
  // eslint-disable-next-line no-useless-catch
  const url = `${API_URL}successfulSale`
  const data = { userEmail, price, sellerEmail, userPhone, userName, service }
  const response = await axios.post(url, data)
  return response
}
