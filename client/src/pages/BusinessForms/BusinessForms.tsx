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
    <div className={style.all}>
      <div className={style.content}>
        <div className={style.right}>
          <div className={style['div-right']}>
            <div className={style['text-log'] + (showBusinessForm ? '' : ` ${style['text-log-adjusted']}`)}>
              <div className={style.forms}>
                <div>
                  {showBusinessForm ? <BusinessLogin onToggle={toggleForm} /> : <FormBusiness onToggle={toggleForm} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessForms
