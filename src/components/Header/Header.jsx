import { useNavigate } from 'react-router-dom'

import { UserBox } from '../UserBox'

import style from './Header.module.scss'
import logo from '../../image/logo.png'


const Header = () => {

    const navigate = useNavigate()

    const logoClick = () => {
        navigate('/')
    }

    return (
        <header className={style.header}>
            <img src={logo} alt="logo" className={style.header__image} onClick={logoClick} />
            <UserBox />
        </header>
    )
}

export default Header