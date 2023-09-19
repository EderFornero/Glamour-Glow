import React, { useState } from 'react'
import style from './input.module.css'

interface BusiCategoriesInputProps {
  register: any
  errors: any
  categoryList: any[]
  toggleOtherInputs: () => void
}

const BusiCategoriesInput: React.FC<BusiCategoriesInputProps> = ({
  register,
  errors,
  categoryList,
  toggleOtherInputs
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const toggleAccordion = (): void => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      toggleOtherInputs()
    }
  }

  function getCategoryNameFromString (categoriesArrayString: string, categoriesArray: any[]): string | undefined {
    const match = categoriesArrayString.match(/\[(\d+)\]/)

    if (match != null) {
      const index = parseInt(match[1], 10)
      if (index >= 0 && index < categoriesArray.length) {
        return categoriesArray[index].name
      }
    }

    return undefined
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked } = event.target
    const value = getCategoryNameFromString(event.target.name, categoryList)

    if (value !== undefined) {
      if (checked) {
        if (selectedCategories.length < 3) {
          setSelectedCategories([...selectedCategories, value])
        }
      } else {
        setSelectedCategories(selectedCategories.filter((category) => category !== value))
      }

      if (selectedCategories.length >= 3) {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
        checkboxes.forEach((checkbox) => {
          if (!selectedCategories.includes(checkbox.value)) {
            checkbox.disabled = true
          }
        })
      }
    }
  }

  return (
    <div>
      <div className={`${style.category} ${isOpen ? style.redText : ''}`} onClick={() => {
        toggleAccordion()
        toggleOtherInputs()
      }}>
      {isOpen ? 'Close Categories' : selectedCategories.length > 0 ? selectedCategories.join(', ') : 'Business Categories'}
      </div>
      {isOpen && (
        <div className={style.accordionContent}>
          {categoryList.map((el, index) => (
            <div key={index} className={style.checkboxContainer}>
              <input
                type="checkbox"
                id={`category${index}`}
                name={`categoriesArray[${index}]`}
                value={el._id}
                onClick={handleCheckboxChange}
                {...register(`categoriesArray[${index}]`)}
              />
              <label htmlFor={`category${index}`}>{el.name}</label>
            </div>
          ))}
        </div>
      )}
      <div>
        {Boolean(errors.categoriesArray) && (
          <span className={style.span}>Please select at least one category</span>
        )}
      </div>
    </div>
  )
}

export default BusiCategoriesInput
