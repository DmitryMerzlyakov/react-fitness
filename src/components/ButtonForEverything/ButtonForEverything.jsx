import style from './ButtonForEverything.module.scss'

const ButtonForEverything = ({ text, type, onClick }) => {
    return (
        <button className={style.btn} onClick={onClick} type={type}>{text}</button>
    )
}

export default ButtonForEverything