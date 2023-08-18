import { selectCurrentWorkout } from '../../redux/selectors'
import { useGetWorkoutByIdQuery } from '../../redux/services/workoutsApi'
import { useSelector } from 'react-redux'

import { YouTubeVideo } from '../../components/YouTube'
import { Exercises } from './Exercises'
import { Progress } from './Progress'
import { Header } from '../../components/Header'

import style from './Workout.module.scss'

export default function Workout() {

    const workoutId = useSelector(selectCurrentWorkout)
    const { data, isLoading } = useGetWorkoutByIdQuery(workoutId)
    if (isLoading) return console.log('Загрузка тренировки')
    const { src, courseName, exercises, name } = data



    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.content}>
                <h2 className={style.content__title}>{courseName.ru}</h2>
                <p className={style.content__description}>{name}</p>
                <div className={style.content__video}>
                    <YouTubeVideo video={src} />
                </div>
            </div>
            <div className={style.footer}>
                {
                    exercises ?
                        ('') :
                        (
                            <>
                                <Exercises exercises={exercises} courseName={courseName.en} />
                                <Progress exercises={exercises} courseName={courseName.en} />
                            </>
                        )
                }
            </div>
        </div>
    )
}
