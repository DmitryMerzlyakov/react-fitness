import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { ButtonForEverything } from '../../../components/ButtonForEverything'

import style from './registration.module.scss'
import logo from '../../../image/logo.png'


const Registration = () => {

  const navigate = useNavigate()

  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'onBlur'
  })  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value)
  }

  const addUser = () => {
		createUserWithEmailAndPassword(auth, email, password, repeatPassword)
			.then((userData) => {
        const user = userData.user
        console.log(user)
				navigate('/login')
			})
			.catch((error) => {
				setError(error.code)
        setVisible(true)
			});
	};


  return (
    <div className={style.registration}>
      <div className={style.registration__image}>
        <img className={style.logo_box} src={logo} alt='logo' />
      </div>
      <form onSubmit={handleSubmit(addUser)} className={style.registration__form}>
        {visible && <p className={style.registration__form_error}>{error}</p> }  
          <input 
           {...register('email', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                  value: 5,
                  message: 'Минимум 5 символов'
              }
            })}
            className={style.input}
            placeholder='Логин'
            type='email'
            value={email}
            onChange={handleEmailChange}
            />
          <div className={style.registration__form_error}>{ errors?.email && <p>{errors?.email?.message}</p> }</div>
          <input 
            {...register('password', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                  value: 5,
                  message: 'Минимум 5 символов'
              }
            })}
            className={style.input}
            placeholder='Пароль'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            />
          <div className={style.registration__form_error}>{errors?.password && <p>{errors?.password?.message}</p> }</div>
          <input 
            {...register('repeatPassword', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                  value: 5,
                  message: 'Минимум 5 символов'
              }
            })}
            id='repeatPassword'
            className={style.input}
            placeholder='Подтвердите пароль'
            type='password'
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            />
            <div className={style.registration__form_error}>{errors?.repeatPassword && <p>{errors?.repeatPassword?.message}</p> }</div>
          <ButtonForEverything text={'Войти'} type='submit'/>
      </form>
    </div>
  )
}

export default Registration
