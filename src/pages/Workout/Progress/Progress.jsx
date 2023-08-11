import { useSelector } from 'react-redux'
import { selectUserId, selectCurrentWorkout } from '../../../redux/selectors'
import { useGetUserProgressQuery } from '../../../redux/services/usersApi'

import { Bar } from './bar'

import style from './Progress.module.scss'

const Progress = ({ courseName, exercises }) => { 

    const userId = useSelector(selectUserId)
	const workoutId = useSelector(selectCurrentWorkout)
	const { data, isLoading } = useGetUserProgressQuery({userId, workoutId, courseName})
    
    const colors = [
		'#565eef',
		'#FF6D00',
		'#9A48F1',
		'#565eef',
		'#FF6D00',
		'#9A48F1',
    ]
    
    if (isLoading) return console.log('Загрузка прогресса')

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <p className={style.content__title}>Мой прогресс по тренировке:</p>
                <div className={style.content__progress}>
                    {exercises.map((item, i) => {
						const uniqueClass = 'wrapper' + i
						const id = item['_id']
						return (
							<div key={i} className={style.list}>
								<h3 className={style.content__progress_text}>
									{item.name.split("(")[0]}
								</h3>
								<Bar
									wrapperClass={uniqueClass}
									color={colors[i]}
									completed={data[id]}
								/>
							</div>
						)
					})}
                </div>
            </div>
        </div>
    )
}

export default Progress