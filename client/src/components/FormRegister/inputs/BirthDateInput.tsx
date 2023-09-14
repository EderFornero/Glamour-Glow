import React from "react";
import style from "./input.module.css";

interface BirthDateInputProps {
  register: any;
  errors: any;
}

const BirthDateInput: React.FC<BirthDateInputProps> = ({
  register,
  errors,
}) => {
  return (
    <div>
      <input
        className={style.input}
        type="date"
        name="dateOfBirth"
        {...register("dateOfBirth", {
          required: {
            value: true,
            message: "Birth date required",
          },
          validate: (value: string) => {
            const birthDate = new Date(value);
            const actualDate = new Date();
            const age = actualDate.getFullYear() - birthDate.getFullYear();
            return age >= 15 || "You are too young";
          },
        })}
      />
      <div>
        {errors.dateOfBirth && (
          <span className={style.span}>{errors.dateOfBirth.message}</span>
        )}
      </div>
    </div>
  );
};

export default BirthDateInput;
