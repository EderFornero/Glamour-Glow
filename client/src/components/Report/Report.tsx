import styles from './Report.module.css'
import { useState } from 'react'
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

  const handleReportSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event?.preventDefault()
    try {
      const endpoint = `${API_URL}${route}/reports`
      await axios.post(endpoint, { id, description })
      toast.success('Report Submitted. We will review it as soon as possible')
      setDescription('')
    } catch (error) {
      toast.error('Sorry, there was a problem. Please try again')
    }
  }

  return (
    <form className={`${styles['report-popup']} ${isOpen ? styles.open : ''}`} onSubmit={handleReportSubmit}>
      <Toaster
        toastOptions={{
          style: {
            marginTop: '100px'
          }
        }}
      />
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
        <button type='button' className={styles.cancel} onClick={onClose}>
          Cancel
        </button>
        <button type='submit' className={styles.submit}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Report
