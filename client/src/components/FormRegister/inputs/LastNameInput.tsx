import React from "react";
import style from "./input.module.css";

interface LastNameInputProps {
  register: any;
  errors: any;
}

const LastNameInput: React.FC<LastNameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        className={style.input}
        type="text"
        name="lastName"
        name="lastName"
        placeholder="Last Name"
        {...register("lastName", {
          required: {
            value: true,
            message: "Please enter your last name!",
          },
          maxLength: 20,
          minLength: 3,
        })}
      />
      <div>
        {errors.lastName?.type === "required" && (
          <span className={style.span}>Last Name Required</span>
        )}
        {errors.lastName?.type === "maxLength" && (
          <span className={style.span}>The last name is too longer</span>
        )}
        {errors.lastName?.type === "minLength" && (
          <span className={style.span}>The last name is too short</span>
        )}
      </div>
    </div>
  );
};

export default LastNameInput;
