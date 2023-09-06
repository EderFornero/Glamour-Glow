import { useState } from 'react'
// utils
import { sendEmail } from '../../utils'

const NodemailerTest = (): JSX.Element => {
  const [recipientEmail, setRecipientEmail] = useState('')

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSendEmail = async (e: any) => {
    e.preventDefault()
    try {
      const response = await sendEmail(recipientEmail)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={e => { setRecipientEmail(e.target.value) }}
          />
        </div>
        <button onClick={(e) => { void handleSendEmail(e) }}>
          SEND
        </button>
      </form>
    </div>
  )
}

export default NodemailerTest
