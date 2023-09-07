import type { FormLoginData } from '../../../interfaces'

export function onSubmitLogin(data: FormLoginData, Users: any, navigate: (to: string) => void, setErrorMessage: (message: string) => void) {
  const user = Users.find((user: { email: string }) => user.email === data.email)
  console.log(user.email)
  if (user) {{
    navigate('/')
    alert('Welcome ' + user.username + '!')
    console.log('Usuario autenticado con éxito', user)
  }
  setErrorMessage('Cuenta no encontrada')
  }
}

// const onSubmit = handleSubmit((data: FormLoginData) => {
//  const user = Users.find((user) => user.email === data.email);/
//  if (user) {
//    if (user.password === data.password) {/
//      navigate('/')
//      alert('Welcome ' + user.username + '!')
//      console.log('Usuario autenticado con éxito', user);
//    } else {
//      console.log('Contraseña incorrecta');
//    }
//  }
//  setErrorMessage('Cuenta no encontrada');
// })
