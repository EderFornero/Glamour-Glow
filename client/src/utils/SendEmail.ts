import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendWelcomeEmail = async (recipientEmail: string) => {
  // eslint-disable-next-line no-useless-catch
  const response = await axios.post('http://localhost:3001/welcomeEmail', {
    recipientEmail
  })
  console.log(response)
  return response
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendResetPasswordEmail = async (email: string) => {
  // eslint-disable-next-line no-useless-catch
  const response = await axios.post('http://localhost:3001/users/forgotPassword', {
    email
  })
  console.log(response)
  return response
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const confirmResetPassword = async (id: any, passwordResetCode: any, password: string, passwordConfirmation: string) => {
  // eslint-disable-next-line no-useless-catch
  const url = `http://localhost:3001/users/resetPassword/${id}/${passwordResetCode}`
  const data = { password, passwordConfirmation }

  const response = await axios.post(url, data)
  return response
}
