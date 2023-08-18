import { useNavigate, useParams } from 'react-router-dom'
import { useGetCourseByNameQuery } from '../../redux/services/coursesApi'

import { Top } from './top'
import { EnrollmentCourse } from '../../components/EnrollmentCourse'

import style from './Course.module.scss'
import logo from '../../image/logo.png'



export default function Course() {

    const params = useParams()
    const courseName = params.name
    const navigate = useNavigate()

    const logoClick = () => {
        navigate('/')
    }

    const { data, isLoading } = useGetCourseByNameQuery(courseName)
    if (isLoading) return console.log('Загрузка курса')

    const { advantages, description, directions, workouts, name } = data

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <img src={logo} alt='logo' onClick={logoClick} />
            </header>
            <Top card={courseName} />
            <div className={style.tytle}>
                <h2 className={style.tytle__text}> Подойдет для вас, если: </h2>
                <ul className={style.tytle__description}>
                    {advantages.map((item, index) => {
                        const number = index + 1
                        return (
                            <li key={index} className={style.tytle__description_list}>
                                <span className={style.circle__number}>{number}</span>
                                <span className={style.tytle__description_text}>{item}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={style.directions}>
                <h2 className={style.directions__title}> Направления: </h2>
                <ul className={style.ul}>
                    {directions.map((item, index) => (
                        <li className={style.directions__list} key={index}> {item} </li>
                    ))}
                </ul>
            </div>
            <div className={style.description}> {description} </div>
            <EnrollmentCourse courseName={courseName} name={name} workout={workouts} />
        </div>
    )
}