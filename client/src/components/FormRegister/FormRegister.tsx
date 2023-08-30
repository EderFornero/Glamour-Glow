import React from 'react'
import { useForm } from 'react-hook-form'
import type { FormData } from '../../interfaces'
import NameInput from './inputs/NameInput'
import EmailInput from './inputs/EmailInput'
import BirthDateInput from './inputs/BirthDateInput'
import PasswordInput from './inputs/PasswordInput'
import AcceptTermsInput from './inputs/AcceptTermsInput'

const FormRegister: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      birthDate: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  })

  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <NameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <BirthDateInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <AcceptTermsInput register={register} errors={errors} />

      <button type='submit'>Send</button>
      {watch('name') ? <h3>Hello {watch('name')}!</h3> : null}
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}

export default FormRegister
