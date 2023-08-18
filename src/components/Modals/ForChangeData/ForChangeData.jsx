import { useState } from 'react'
import { setEmail } from '../../../redux/slices/user'
import { auth } from '../../../firebase'
import { updateEmail, updatePassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import { ButtonForClick } from '../../ButtonForClick'
import { Input } from '../../Input'

import style from './ForChangeData.module.scss'

const ModalForChangeData = ({ type, setVisible }) => {

    const getPlaceholder = () => {
        switch (type) {
            case 'login':
                return {
                    placeholder: 'Введите новый логин'
                }
            case 'password':
                return {
                    placeholder: 'Введите новый пароль'
                }
            default:
                break
        }
    };

    const { placeholder } = getPlaceholder()

    const dispatch = useDispatch()

    const [newLogin, setNewLogin] = useState(null)
    const [newPassword, setNewPassword] = useState(null)

    const setDataOnChange = (e, setData) => {
        setData(e.target.value)
    };

    const handleOpenChangePas = () => {
        const user = auth.currentUser

        updatePassword(user, newPassword)
            .then(() => {
                console.log('Пароль изменен')
                setVisible(prev => !prev)
            })
            .catch(() => {
                alert('Некорректный пароль')
            })
    }

    const handleOpenChangeLogin = () => {
        const user = auth.currentUser

        updateEmail(user, newLogin)
            .then(() => {
                localStorage.setItem('userEmail', newLogin)
                dispatch(setEmail({ email: newLogin }))
                console.log('Логин изменен')
                setVisible(prev => !prev)
            })
            .catch(() => {
                alert('Некорректный логин')
            });
    }

    return (
        <div className={style.wrapper}>
            {
                type === 'login' ? (
                    <>
                        <Input
                            onChange={(e) => setDataOnChange(e, setNewLogin)}
                            placeholder={placeholder}
                        />
                        <ButtonForClick
                            text={'Сохранить'}
                            onClick={handleOpenChangeLogin}
                        />
                    </>
                ) : (
                    <>
                        <Input
                            onChange={(e) => setDataOnChange(e, setNewPassword)}
                            placeholder={placeholder}
                        />
                        <ButtonForClick
                            text={'Сохранить'}
                            onClick={handleOpenChangePas}
                        />
                    </>
                )

            }

        </div>
    )
}

export default ModalForChangeData
