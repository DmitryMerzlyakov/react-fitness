/* eslint-disable */
import { useAddNewCourseMutation, useGetUserByIdQuery } from '../../redux/services/usersApi'
import { useGetWorkoutByIdQuery } from '../../redux/services/workoutsApi'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated, selectUserId } from '../../redux/selectors'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonForClick } from '../ButtonForClick'

import telephone from '../../image/telephone.png'
import style from './EnrollmentCourse.module.scss'

const EnrollmentCourse = ({ courseName, name, workout }) => {

    console.log(workout);

    const [visible, setVisible] = useState(false)

    const navigate = useNavigate()

    const [addNewCourse] = useAddNewCourseMutation()

    const isAuth = useSelector(selectIsAuthenticated)
    const userId = useSelector(selectUserId)

    const workoutsForAdd = {}

    workout.map((workoutId) => {
        const { data } = useGetWorkoutByIdQuery(workoutId)

        if (data) {
            const { name, exercises } = data

            const exercisesId = {}

            if (exercises) {
                for (const iterator of exercises) {
                    exercisesId[iterator._id] = 0
                }
                workoutsForAdd[workoutId] = { name: name, exercises: exercisesId }
            } else {
                console.log(name, exercises)
            }
        }
    })


    const course = {
        userId: userId,
        courseName: courseName,
        data: {
            name: name,
            workouts: workoutsForAdd,
        },
    }

    const { data: usersCourses, isLoading } = useGetUserByIdQuery(userId);
    if (isLoading) return

    const addCourse = async (data) => {
        await addNewCourse(data)
            .then(() => {
                setVisible(prev => !prev)
            })
            .catch((error) => {
                console.log("error " + error)
            })
    };

    return (
        <div className={style.zapisblock}>
            <div className={style.zapisblock_proba}>
                <div className={style.zapisblock_text}>
                    <p className={style.text}>
                        Оставьте заявку на пробное занятие,
                        мы свяжемся с вами, поможем с выбором направления и тренера,
                        с которым тренировки принесут здоровье и радость.
                    </p>
                </div>
                {
                    visible ? (
                        'Курс успешно добавлен в Ваш личный кабинет!'
                    ) : (
                        <ButtonForClick
                            onClick={() => {
                                if (!isAuth) { navigate('/login') }
                                !usersCourses ||
                                    !Object.keys(usersCourses.courses).some(
                                        (e) => e === courseName
                                    )
                                    ? addCourse(course)
                                    : setVisible(prev => !prev)
                            }}
                            text='Записаться на тренировку'
                        />
                    )
                }

            </div>
            <img src={telephone} alt='telephone' className={style.zapisblock_hpone} />
        </div>
    )
}

export default EnrollmentCourse