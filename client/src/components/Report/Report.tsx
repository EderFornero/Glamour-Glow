import styles from './Report.module.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../redux/axiosService'
import toast, { Toaster } from 'react-hot-toast'
const API_URL = import.meta.env.VITE_SERVER_URL

interface ReportProps {
  isOpen: boolean
  onClose: any
  id: string | null | false
  route: string
}

const Report: React.FC<ReportProps> = ({ isOpen, onClose, id, route }) => {
  const [description, setDescription] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const location = useLocation()

  const handleReportSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event?.preventDefault()
    try {
      const endpoint = `${API_URL}${route}/reports`
      await axios.post(endpoint, { id, description })
      setDescription('')
      setIsSubmitted(true)

      toast.success('Report Submitted. We will review it as soon as possible', {
        style: {
          border: '1px solid #3d36be',
          padding: '16px',
          color: '#1eb66d'
        },
        iconTheme: {
          primary: '#6e66ff',
          secondary: '#FFFAEE'
        }
      })
      setIsSubmitted(false)
    } catch (error) {
      toast.error('Sorry, there was a problem. Please try again', {
        style: {
          border: '1px solid #3d36be',
          padding: '16px',
          color: 'red'
        },
        iconTheme: {
          primary: 'red',
          secondary: '#FFFAEE'
        }
      })
    }
  }

  return (
    <form className={`${styles['report-popup']} ${isOpen ? styles.open : ''}`} onSubmit={handleReportSubmit}>
      {location.pathname.startsWith('/userdetail') && description === '' && isSubmitted && (
        <Toaster
          toastOptions={{
            style: {
              marginTop: '100px'
            }
          }}
        />
      )}
      {location.pathname.startsWith('/admin') && <Toaster />}
      <label htmlFor='report' className={styles.label}>
        Provide a description:
      </label>
      <textarea
        name='report'
        placeholder='Enter your report here'
        value={description}
        onChange={(event) => {
          setDescription(event?.target.value)
        }}
        className={styles.report}
        rows={6}
      ></textarea>
      <div className={styles.buttons}>
        {!location.pathname.startsWith('/admin') && (
          <button type='button' className={styles.cancel} onClick={onClose}>
            Cancel
          </button>
        )}

        <button type='submit' className={styles.submit}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Report
