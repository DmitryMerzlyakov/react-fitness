import style from './ButtonForClick.module.scss'

const ButtonForClick = ({ text, type, onClick }) => {
    return (
        <button
            className={`${text === 'Зарегистрироваться' ? style.singUp : style.btn}`}
            onClick={onClick} type={type}>{text}</button>
    )
}

export default ButtonForClick