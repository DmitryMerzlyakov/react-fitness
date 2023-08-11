import { useSelector } from 'react-redux'

import { ButtonForChooseWorkout } from '../../ButtonForChooseWorkout'

import style from './ForCooseWorkout.module.scss'

const ModalForCooseWorkout = ({ isActive, setIsActive, course}) => { 

  const userCourse = useSelector((state) => state.user.courses[course])
  if (!userCourse) return console.log('Загрузка списка тренировок')
  const { workouts } = userCourse

  console.log(workouts)
        
  return (
    <div className={`${isActive ? style.wrapper : style.active }`} onClick={() => {setIsActive(!isActive)}}>
        <div className={style.box}>
            <p className={style.tytle}>Выберите тренировку</p>
              <ul className={style.buttons}>
                {Object.entries(workouts).map((item, index) => {
                    const workoutId = item[0]
                    const workoutInfo = item[1]
                    console.log('workoutId',  workoutId, 'workoutInfo', workoutInfo)

                  return (
                    <ButtonForChooseWorkout
                        key={index}
                        exercise={workoutInfo.name}
                        completed={workoutInfo.completed}
                        id={workoutId}
                    />
                  )
                })}
              </ul>
        </div>
    </div>
  )
}

export default ModalForCooseWorkout
