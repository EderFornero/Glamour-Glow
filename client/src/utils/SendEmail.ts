import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendEmail = async (recipientEmail: string, subject: string, message: string) => {
  // eslint-disable-next-line no-useless-catch
  const response = await axios.post('http://localhost:3001/email', {
    recipientEmail,
    subject,
    message
  })
  return response
}
