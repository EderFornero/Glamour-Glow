import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendWelcomeEmail = async (recipientEmail: string) => {
  // eslint-disable-next-line no-useless-catch
  const response = await axios.post('http://localhost:3001/welcomeEmail', {
    recipientEmail
  })
  return response
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendResetPasswordEmail = async (email: string) => {
  // eslint-disable-next-line no-useless-catch
  const response = await axios.post('http://localhost:3001/users/forgotPassword', {
    email
  })
  return response
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export const confirmResetPassword = async (email: string) => {
//   // eslint-disable-next-line no-useless-catch
//   const response = await axios.post('http://localhost:3001/users/forgotPassword', {
//     email
//   })
//   return response
// }
