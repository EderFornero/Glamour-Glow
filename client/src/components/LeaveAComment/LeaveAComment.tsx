import React, { useState } from 'react'
import { Rating } from '@mui/material'
import style from './LeaveAComment.module.css'
import axios from '../../redux/axiosService'
import { useParams } from 'react-router-dom'
const API_URL = import.meta.env.VITE_SERVER_URL

interface LeaveACommentProps {
  userId: string | null
}

interface FormReviewData extends LeaveACommentProps {
  rating: number | null
  description: string
  sellerId: undefined | string
}

const LeaveAComment: React.FC<LeaveACommentProps> = ({ userId }) => {
  const { id } = useParams()
  const [formData, setFormData] = useState<FormReviewData>({
    userId,
    sellerId: id,
    rating: null,
    description: ''
  })

  const handleRatingChange = (_event: React.ChangeEvent<unknown>, newValue: number | null): void => {
    setFormData({ ...formData, rating: newValue })
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setFormData({ ...formData, description: event.target.value })
  }

  const handleSubmit = async (_event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event?.preventDefault()
      const response = await axios.post(`${API_URL}reviews`, formData)

      if (response.status === 200) {
        // Handle success, e.g., display a success message or redirect
        setFormData({
          userId,
          sellerId: id,
          rating: null,
          description: ''
        })
        console.log('Comment submitted successfully')
      } else {
        console.error('Error submitting comment')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2 className={style.title}>Leave a comment for us</h2>
      <div className={style['input-container']}>
        <label htmlFor='rating'>Rate the service</label>
        <Rating name='rating-comment' value={formData.rating} onChange={handleRatingChange} classes={{ iconFilled: style['star-filled'], iconEmpty: style['star-empty'] }} />
      </div>
      <div className={style['input-container']}>
        <label htmlFor='comment'>Leave a comment</label>
        <textarea name='comment' rows={7} style={{ resize: 'none' }} value={formData.description} onChange={handleDescriptionChange}></textarea>
      </div>
      <div className={style['submit-container']}>
        <button className={style.submit} type='submit'>
          Leave comment
        </button>
      </div>
    </form>
  )
}

export default LeaveAComment
