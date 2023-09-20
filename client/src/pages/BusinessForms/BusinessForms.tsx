import React, { useState } from 'react'
import BusinessLogin from '../../components/BusinessLogin/BusinessLogin'
import style from './BusinessForms.module.css'
import FormBusiness from '../../components/FormCreateBusiness/FormCreateBusiness'

const BusinessForms: React.FC = () => {
  const [showBusinessForm, setShowBusinessForm] = useState(true)

  const toggleForm = (): void => {
    setShowBusinessForm(!showBusinessForm)
  }

  return (
    <div className={style['div-business-forms']}>
      {showBusinessForm ? <BusinessLogin onToggle={toggleForm} /> : <FormBusiness onToggle={toggleForm} />}
    </div>
  )
}

export default BusinessForms
