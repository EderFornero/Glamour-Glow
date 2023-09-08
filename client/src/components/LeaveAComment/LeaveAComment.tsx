import style from './LeaveAComment.module.css'
import { Rating, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import { useState } from 'react'

const LeaveAComment = ({ user }: any): JSX.Element => {
  const [ratingValue, setRatingValue] = useState<number | null>(null)
  const handleRatingChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setRatingValue(newValue)
  }

  return (
    <form className={style.form}>
      <h2 className={style.title}> Leave a comment for us</h2>
      <div className={style['input-container']}>
        <FormControl variant='outlined' fullWidth>
          <InputLabel id='service' className={style['label-comment']}>
            Service bought in store
          </InputLabel>
          <Select labelId='service' label='Which Service did you buy?' className={style['select-comment']}>
            {user.services.map((service: any) => {
              return (
                <MenuItem key={service.id} value={service.name}>
                  {service.name}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
      <div className={style['input-container']}>
        <label htmlFor='rating'>Rate the service</label>
        <Rating name='rating-comment' value={ratingValue} onChange={handleRatingChange} classes={{ iconFilled: style['star-filled'], iconEmpty: style['star-empty'] }} />
      </div>
      <div className={style['input-container']}>
        <label htmlFor='comment'>Leave a comment</label>
        <textarea name='comment' rows={7} style={{ resize: 'none' }}></textarea>
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
