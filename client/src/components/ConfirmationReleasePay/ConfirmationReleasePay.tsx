import style from './ConfirmationReleasePay.module.css'

interface ConfirmationReleasePayProps {
  message: string
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmationReleasePay: React.FC<ConfirmationReleasePayProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={style.modal}>
      <div className={style['modal-content']}>
        <p>{message}</p>
        <div className={style['modal-buttons']}>
          <button className={style.button} onClick={onConfirm}>
            Submit
          </button>
          <button className={style.button} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationReleasePay
