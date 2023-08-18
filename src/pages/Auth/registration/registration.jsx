import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import { useAddNewUserMutation } from '../../../redux/services/usersApi'
// import { userData } from './userData'

import { ButtonForClick } from '../../../components/ButtonForClick'

import style from './registration.module.scss'
import logo from '../../../image/logo.png'


const Registration = () => {

  const navigate = useNavigate()

  // const [addNewUser] = useAddNewUserMutation()

  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'onBlur'
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)

  const logoClick = () => {
    navigate('/')
  }

  // const createUser = async (uid) => {
  //   await addNewUser(userData(uid))
  // }

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
        // createUser(user.uid)
        console.log(user.uid)
        navigate('/login')
      })
      .catch((error) => {
        switch (error.code) {
          case 'passwords-mismatch':
            setError('Пароли не совпадают!')
            break
          case 'auth/too-many-requests':
            setError('Слишком много запросов!')
            break
          case 'auth/invalid-email':
            setError('Некорректный e-mail!')
            break
          case "auth/weak-password":
            setError('Cлишком легкий пароль!')
            break
          case 'auth/missing-password':
            setError('Введите пароль!')
            break
          default:
            break
        }
        setVisible(true)
      })
  }


  return (
    <div className={style.registration}>
      <div className={style.registration__image}>
        <img className={style.logo_box} src={logo} alt='logo' onClick={logoClick} />
      </div>
      <form onSubmit={handleSubmit(addUser)} className={style.registration__form}>
        {visible && <p className={style.registration__form_error}>{error}</p>}
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
        <div className={style.registration__form_error}>{errors?.email && <p>{errors?.email?.message}</p>}</div>
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
        <div className={style.registration__form_error}>{errors?.password && <p>{errors?.password?.message}</p>}</div>
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
        <div className={style.registration__form_error}>{errors?.repeatPassword && <p>{errors?.repeatPassword?.message}</p>}</div>
        <ButtonForClick text={'Войти'} type='submit' />
      </form>
    </div>
  )
}

export default Registration
