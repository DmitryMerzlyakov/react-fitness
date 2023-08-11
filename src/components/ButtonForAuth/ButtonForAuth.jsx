import { useNavigate } from 'react-router-dom'

import style from './ButtonForAuth.module.scss'

const ButtonForAuth = () => {

    const navigate = useNavigate()

    const handleClick = () => {
		navigate('/registration')
	};

    return (
        <button className={style.button} onClick={handleClick}>Зарегистрироваться</button>
    )
}

export default ButtonForAuth