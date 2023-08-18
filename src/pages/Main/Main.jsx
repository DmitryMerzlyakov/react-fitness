import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useGetCoursesQuery } from '../../redux/services/coursesApi'
import { setLogin } from '../../redux/slices/user'

import { CardsBox } from '../../components/CardsBox'
import { ButtonForScroll } from '../../components/ButtonForScroll'

import logoWhite from '../../image/logoWhite.png'
import sticker from '../../image/sticker.png'
import style from './Main.module.scss'

export default function Main() {

    const dispatch = useDispatch()

    useEffect(() => {
        const localId = localStorage.getItem('userID')
        const localEmail = localStorage.getItem('userEmail')
        if (!localId || !localEmail) return
        dispatch(setLogin({ userId: localId, email: localEmail }))
    }, [dispatch])

    const navigate = useNavigate()

    const handleEnter = () => {
        navigate('/login')
    };

    const { data, isLoading } = useGetCoursesQuery()

    if (isLoading) return console.log('Загрузка')
    const course = Object.keys(data)

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <img src={logoWhite} alt='logo' />
                <button className={style.button} onClick={handleEnter}>Войти</button>
            </header>
            <div className={style.description}>
                <div className={style.description__box}>
                    <p className={style.description__text}>Онлайн-тренировки для занятий дома</p>
                    <h1 className={style.description__top}>Начните заниматься спортом и улучшите качество жизни</h1>
                </div>
                <img src={sticker} alt='sticker' />
            </div>
            <CardsBox course={course} thisPage={'main'} />
            <footer className={style.footer}>
                <ButtonForScroll />
            </footer>
        </div>
    )
}