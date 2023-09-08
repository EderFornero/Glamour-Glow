import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendWelcomeEmail = async (recipientEmail: string) => {
  // eslint-disable-next-line no-useless-catch
  const response = await axios.post('http://localhost:3001/email', {
    recipientEmail
  })
  return response
}
