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
  const response = await axios.post(`${API_URL}users/forgotPassword`, { email })
  console.log(response)
  return response
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendResetPasswordEmailSeller = async (sellerEmail: string) => {
  // eslint-disable-next-line no-useless-catch
  const response = await axios.post(`${API_URL}sellers/forgotPassword`, { sellerEmail })
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
export const confirmResetPasswordSeller = async (id: any, passwordResetCode: any, sellerPassword: string, passwordConfirmation: string) => {
  // eslint-disable-next-line no-useless-catch
  const url = `${API_URL}sellers/resetPassword/${id}/${passwordResetCode}`
  const data = { sellerPassword, passwordConfirmation }
  const response = await axios.post(url, data)
  return response
}

export const paymentConfirmation = async (userEmail: string, price: string | null, sellerEmail: string, sellerPhone: string, sellerName: string, service: string | null): Promise<void> => {
  try {
    const url = `${API_URL}successfulPayment`
    const data = { userEmail, price, sellerEmail, sellerPhone, sellerName, service }
    await axios.post(url, data)
    console.log('EMAIL USER')
  } catch (error) {
    console.log('SALIO MAL')
  }
}

export const sendSellerEmail = async (userEmail: string, price: string | null, sellerEmail: string, userPhone: string, userName: string, service: string | null): Promise<any> => {
  try {
    const url = `${API_URL}successfulSale`
    const data = { userEmail, price, sellerEmail, userPhone, userName, service }
    await axios.post(url, data)
    console.log('EMAIL SELLER')
  } catch (error) {
    console.log('SALIO ALGO MAL EN SEND SELLER EMAIL')
  }
}
