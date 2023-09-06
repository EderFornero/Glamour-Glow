import axios from 'axios'
import { useState } from 'react'

const NodemailerTest = () => {
  const [recipientEmail, setRecipientEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/send_email', {
      recipientEmail,
      subject,
      message
    })
      .then(() => { console.log('Successfully Sent') })
      .catch(() => { console.log('Ops...') })
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
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            onChange={e => { setSubject(e.target.value) }}
          />
        </div>
        <div>
          <label htmlFor="email">Message</label>
          <input
            type="text"
            onChange={e => { setMessage(e.target.value) }}
          />
        </div>
        <button onClick={(e) => { sendEmail(e) }}>
          SEND
        </button>
      </form>
    </div>
  )
}

export default NodemailerTest
