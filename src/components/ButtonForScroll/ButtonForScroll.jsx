import style from './ButtonForScroll.module.scss'

const ButtonForScroll = () => {

    const handleScroll = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
    }
    
    return (
        <button className={style.button} onClick={handleScroll}>Наверх ↑</button>
    )
}

export default ButtonForScroll