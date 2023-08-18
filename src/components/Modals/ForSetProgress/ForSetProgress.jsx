import { useSelector } from 'react-redux'
import { useRef, useState } from 'react'
import { selectCurrentWorkout, selectUserId } from '../../../redux/selectors'
import { useSetUserProgressMutation, useSetUserWorkoutCompletedMutation } from '../../../redux/services/usersApi'
import { onChange, setProgressToObj } from './hooks'

import { ButtonForClick } from '../../ButtonForClick'
import { Input } from '../../Input'

import style from './ForSetProgress.module.scss'

const ModalForSetProgress = ({ visible, setVisible, exercises, courseName, setComplete }) => {

	const modalRef = useRef()
	const progress = {}
	const info = {}

	const [submitted, setSubmitted] = useState(false)

	const workoutId = useSelector(selectCurrentWorkout)
	const userId = useSelector(selectUserId)

	const [setUserProgress] = useSetUserProgressMutation()
	const [setUserWorkoutCompleted] = useSetUserWorkoutCompletedMutation()

	const submitWorkoutStatus = async (completed) => {
		await setUserWorkoutCompleted({ userId, courseName, workoutId, completed })
			.then((result) => {
				console.log(result)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const submitProgress = async (data) => {
		await setUserProgress(data)
			.then(() => {
				if (Object.values(data.progress).every((e) => e === 100)) {
					console.log('Completed')
					submitWorkoutStatus({ completed: true })
				} else {
					submitWorkoutStatus({ completed: false })
				}
				setComplete(true)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const setAllProgress = () => {
		if (!Object.keys(progress).length)
			return setSubmitted(true)

		setProgressToObj('courseName', courseName, info)
		setProgressToObj('workoutId', workoutId, info)
		setProgressToObj('userId', userId, info)
		setProgressToObj('progress', progress, info)

		submitProgress(info)

		setVisible(false)

	}

	return (
		<div className={style.wrapper} onClick={() => { setVisible(prev => !prev) }} ref={modalRef} >
			<div className={style.blockprogress} onClick={(e) => e.stopPropagation()}>
				<h2 className={style.blockprogress__title}>Мой прогресс</h2>
				<div className={style.blockprogress__box}>
					{exercises.map((exercise, i) => {
						const maxAmount = exercise.amount
						return (
							<label key={i} className={style.blockprogress__box_text}>
								{`Сколько раз вы сделали ${exercise.name.split('(')[0].toLowerCase()}?`}
								<Input
									type={'number'}
									uniqueClass={style.input}
									placeholder='Введите значение'
									max={maxAmount}
									min={0}
									placeholderText={maxAmount}
									onChange={(event) => {
										onChange(
											event,
											exercise['_id'],
											maxAmount,
											progress
										)
									}}
								/>
								{submitted && <p className={style.error}>Сначала заплоните прогресс</p>}
							</label>
						)
					})}
				</div>
				<ButtonForClick text={'Отправить'} onClick={setAllProgress} />
			</div>
		</div>
	)
}

export default ModalForSetProgress
