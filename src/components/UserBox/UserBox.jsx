import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogout } from '../../redux/slices/user'

import sprite from '../../image/sprite.svg'
import style from './UserBox.module.scss'

const UserBox = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = localStorage.getItem('userEmail')

    const [visible, setVisible] = useState(false)

    const handleVisible = () => {
        setVisible(prev => !prev)
    }

    const hadleExit = () => {
        localStorage.clear()
        dispatch(setLogout())
        navigate('/')
    }

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.user}>
                    <svg className={style.user__avatar} alt='avatar'>
                        <use xlinkHref={`${sprite}#icon-avatar`}></use>
                    </svg>
                    <p>{user}</p>
                    <button className={style.user__button} onClick={handleVisible}>
                        <svg alt='dropdown' className={style.user__button_dropdown}>
                            <use xlinkHref={`${sprite}#icon-dropdown`}></use>
                        </svg>
                    </button>
                </div>
                {visible && <button className={style.exit} onClick={hadleExit}>Выход</button>}
            </div>
        </>
    )
}

export default UserBox