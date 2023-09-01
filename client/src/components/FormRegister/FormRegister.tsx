import React from 'react';
import { useForm } from 'react-hook-form';
import type { FormData } from '../../interfaces';
import NameInput from './inputs/NameInput';
import EmailInput from './inputs/EmailInput';
import BirthDateInput from './inputs/BirthDateInput';
import PasswordInput from './inputs/PasswordInput';
import AcceptTermsInput from './inputs/AcceptTermsInput';
import UserNameInput from './inputs/UserNameInput';
import style from './FormRegister.module.css';
import { useGoBack } from '../../hooks';

const FormRegister: React.FC = () => {
  const goBack = useGoBack();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      userName: '',
      email: '',
      birthDate: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
  });

  return (
    <div className={style['div-form']}>
      <form className={style['form-box']} onSubmit={onSubmit}>
        <h1>Welcome!</h1>
        <div className={style['name-input']}>
          <NameInput register={register} errors={errors} />
        </div>
        <div className={style['user-input']}>
          <UserNameInput register={register} errors={errors} />
        </div>
        <div className={style['email-input']}>
          <EmailInput register={register} errors={errors} />
        </div>
        <div className={style['password-input']}>
          <PasswordInput register={register} errors={errors} />
        </div>
        <div className={style['birth-input']}>
          <BirthDateInput register={register} errors={errors} />
        </div>
        <div className={style['confirm-input']}>
          <AcceptTermsInput register={register} errors={errors} />
        </div>
        <div className={style['div-buttons']}>
          <button onClick={goBack}>Back</button>
          <div className={style['button-div']}>
            <button type="submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
