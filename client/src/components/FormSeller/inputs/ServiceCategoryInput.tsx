import React from 'react';
import style from './input.module.css';

interface SellerCategoriesInputProps {
  register: any;
  errors: any;
  categoryList: any[];
}

const SellerCategoriesInput: React.FC<SellerCategoriesInputProps> = ({ register, errors, categoryList }) => {
  return (
    <div className={style['select-container']}>
      <select
        className={style.input}
        type='select'
        name='serviceCategories'
        {...register('serviceCategories', {
          required: {
            value: true,
            message: 'Please enter at least one category',
          },
        })}
      >
        <option value='' disabled selected>
          My Category Type
        </option>
        {categoryList.map((el, index) => (
          <option className={style.option} key={index} value={el._id}>
            {el.name}
          </option>
        ))}
      </select>
      <div>
        {errors.serviceCategories?.type === 'required' && (
          <span className={style.span}>{errors.serviceCategories.message}</span>
        )}
      </div>
    </div>
  );
};

export default SellerCategoriesInput;