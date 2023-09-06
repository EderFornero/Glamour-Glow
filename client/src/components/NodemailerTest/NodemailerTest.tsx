import { useState } from 'react'

const NodemailerTest = () => {
  const [recipientEmail, setRecipientEmail] = useState('')
  // const [subject, setSubject] = useState('')
  // const [message, setMessage] = useState('')

  const sendEmail = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3001/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipientEmail })
    })
    console.log(res)
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
        <button onClick={(e) => { void sendEmail(e) }}>
          SEND
        </button>
      </form>
    </div>
  )
}

export default NodemailerTest
