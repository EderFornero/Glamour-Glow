import styles from './Report.module.css'
import { useState } from 'react'
import axios from '../../redux/axiosService'
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
      console.log('REPORT GENERADO')
      setDescription('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={`${styles['report-popup']} ${isOpen ? styles.open : ''}`} onSubmit={handleReportSubmit}>
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
