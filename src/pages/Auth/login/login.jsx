import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../../redux/slices/user'
import { useForm } from 'react-hook-form'

import { ButtonForEverything } from '../../../components/ButtonForEverything'
import { ButtonForAuth } from '../../../components/ButtonForAuth'

import style from './login.module.scss'
import logo from '../../../image/logo.png'


const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onBlur'
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    const { name, value } = event.target

    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  async function onSubmit() {
    const auth = getAuth()
		await signInWithEmailAndPassword(auth, email, password)
			.then((userData) => {
				const user = userData.user

				dispatch(
					setLogin({
						userId: user.uid,
						email: user.email,
					})
				)
				localStorage.setItem('userID', user.uid)
				localStorage.setItem('userEmail', user.email)
				navigate('/profile')
			})
      .catch((error) => {
        console.log(error.code)
        setError(error.code)
        setVisible(true)
			});
	}

  return (
    <div className={style.login}>
        <div className={style.login__image}>
            <img src={logo} alt='logo' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.login__form}>
          {visible && <p className={style.login__form_error}>{error}</p> }
          <input
            {...register('email', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                  value: 5,
                  message: 'Минимум 5 символов'
              }
            })}
            placeholder='Логин'
            className={style.input}
            type='email'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
          <div className={style.login__form_error}>{ errors?.email && <p>{errors?.email?.message}</p> }</div>
          <input
            {...register('password', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов'
              }
            })}
            placeholder='Пароль'
            className={style.input}
            type='password'
            name='password'
            value={password}
            onChange={handleInputChange}
          />
          <div className={style.login__form_error}>{errors?.password && <p>{errors?.password?.message}</p> }</div>
          <ButtonForEverything text={'Войти'} type='submit'/>
          <ButtonForAuth /> 
        </form>
    </div>
  );
};

export default Login;