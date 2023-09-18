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
  const [report, setReport] = useState<string>('')

  const handleReportSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event?.preventDefault()
    const endpoint = `${API_URL}${route}/reports`
    await axios.post(endpoint, { id, report })
    setReport('')
  }

  return (
    <form className={`${styles['report-popup']} ${isOpen ? styles.open : ''}`} onSubmit={handleReportSubmit}>
      <label htmlFor='report' className={styles.label}>
        Provide a description:{' '}
      </label>
      <textarea
        name='report'
        placeholder='Enter your report here'
        value={report}
        onChange={(event) => {
          setReport(event?.target.value)
        }}
        className={styles.report}
        rows={6}
      ></textarea>
      <div className={styles.buttons}>
        <button type='submit' className={styles.submit} disabled={report.length < 100}>
          Submit
        </button>
        <button type='button' className={styles.cancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Report
