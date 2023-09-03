import React, { useState } from 'react';
import FormRegister from '../../components/FormRegister/FormRegister';
import FormLogin from '../../components/FormLogin/FormLogin';
import style from './Forms.module.css';

const Forms: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className={style['all']}>
      <div className={style['content']}>
        <div className={style['left']}>
          <h1 className={style['h1']}>Let your work Glow!</h1>
        </div>
        <div className={style['right']}>
          <div className={style['div-right']}>
            <div className={style['text-log'] + (showLoginForm ? '' : ` ${style['text-log-adjusted']}`)}>
              <div className={style['text']}>
                <button
                  className={style['i-log']}
                  onClick={toggleForm}
                  disabled={showLoginForm}
                >
                  Login
                </button>
                <p className={style['I']}>I</p>
                <button
                  className={style['i-reg']}
                  onClick={toggleForm}
                  disabled={!showLoginForm}
                >
                  Register
                </button>
              </div>
              <div className={style['forms']}>
                <div>
                  {showLoginForm ? <FormLogin onToggle={toggleForm} /> : <FormRegister onToggle={toggleForm} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;