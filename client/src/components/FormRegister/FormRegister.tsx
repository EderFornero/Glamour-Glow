import { useRef } from 'react'
import { useForm } from 'react-hook-form'

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      birthDate: '',
      password: '',
      confirmPassword: '',
      country: '',
      acceptTerms: false,
    },
  })

  const password = useRef(null)
  password.current = watch('password', '')

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          {...register('name', {
            required: {
              value: true,
              message: 'Please enter your name!',
            },
            maxLength: 30,
            minLength: 3,
          })}
        />
        {errors.name?.type === 'required' && <span>Name Required</span>}
        {errors.name?.type === 'maxLength' && <span>The name must not be longer than 20 characters</span>}
        {errors.name?.type === 'minLength' && <span>The name must not be less than 3 caracters</span>}
      </div>

      <div>
        <label>Email: </label>
        <input
          type='email'
          name='email'
          {...register('email', {
            required: {
              value: true,
              message: 'Please enter your email',
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Email not valid',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Birth Date: </label>
        <input
          type='date'
          name='birthDate'
          {...register('birthDate', {
            required: {
              value: true,
              message: 'Birth date required',
            },
            validate: (value) => {
              const birthDate = new Date(value)
              const actualDate = new Date()
              const age = actualDate.getFullYear() - birthDate.getFullYear()
              return age >= 15 || 'You are too young'
            },
          })}
        />
      </div>

      <div>
        <label>Password: </label>
        <input
          type='password'
          name='password'
          {...register('password', {
            required: {
              value: true,
              message: 'Password required',
            },
            minLength: {
              value: 6,
              message: 'The password must be longer than 6 characters',
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>Confirm Password: </label>
        <input
          type='password'
          name='confirmPassword'
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'Please confirm your password',
            },
            minLength: {
              value: 6,
              message: 'The password must be longer than 6 characters',
            },
            validate: (value) => value === password.current || 'the passwords dont match',
          })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>

      <div>
        <label htmlFor='country'>Country: </label>
      </div>

      <div>
        <input
          type='checkbox'
          name='acceptTerms'
          {...register('acceptTerms', {
            required: {
              value: true,
              message: 'Please accept the terms and conditions',
            },
          })}
        />
        <label>Accept Terms and Conditions</label>
        {errors.acceptTerms && <span>{errors.acceptTerms.message}</span>}
      </div>

      <button type='submit'>Send</button>
      {watch('name') ? <h3>Hello {watch('name')}!</h3> : null}
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}

export default FormRegister
