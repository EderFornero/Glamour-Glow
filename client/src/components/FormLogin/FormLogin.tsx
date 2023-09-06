import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGoBack } from "../../hooks";
import EmailLogin from "./inputs/EmailLogin";
import PasswordLogin from "./inputs/PasswordLogin";
import { Link } from "react-router-dom";
import style from "./FormLogin.module.css";
import { getUsers, postValidate } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../redux/types";
import type { FormLoginData } from "../../interfaces";
import { onSubmitLogin } from "./handlers/onSubmit";
import ErrorMessage from "./handlers/errorMessage";

const FormLogin: React.FC = ({ onToggle }: any) => {
  const dispatch = useDispatch();
  const goBack = useGoBack();
  // const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // useEffect(() => {
  //   dispatch(getUsers())
  // }, [dispatch])

  // const Users = useSelector((state: RootState) => state.users)
  // console.log(Users)

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = handleSubmit((data: FormLoginData) => {
    console.log(data);
    return dispatch(postValidate(data));
  });

  return (
    <div className={style.content}>
      <form onSubmit={onSubmit}>
        <p className={style.txt}>Email:</p>
        <EmailLogin register={register} errors={errors} />
        {errorMessage !== "" && <ErrorMessage message={errorMessage} />}
        <p className={style.txt}>Password:</p>
        <PasswordLogin register={register} errors={errors} />
        <div className={style["alt-login"]}>
          <h4 className={style["log-with"]}>or Login With:</h4>
          <div className={style["ico-div"]}>
            <div className={style.google}></div>
            <div className={style.ig}></div>
          </div>
        </div>
        <div className={style["buton-div"]}>
          <button className={style.btn} onClick={goBack}>
            Back
          </button>
          <button className={style.btn} type="submit">
            Send
          </button>
        </div>
      </form>
      <div className={style["link-texts"]}>
        <button>
          <p className={style["reg-button"]} onClick={onToggle}>
            Dont have an account?
          </p>
        </button>
        <Link to="/recovePassword">
          <p className={style.forgot}>Forgot Password?</p>
        </Link>
      </div>
      <div className={style["ico-div"]}>
        <div className={style.google}></div>
        <div className={style.ig}></div>
      </div>
    </div>
  );
};

export default FormLogin;
