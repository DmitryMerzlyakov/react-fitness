import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ModalForCooseWorkout } from '../../../components/Modals/ForChooseWorkout'

import yoga from '../../../image/yoga.png'
import stretching from '../../../image/stretching.png'
import step_aerobics from '../../../image/step.png'
import dance_fitness from '../../../image/dancfitnes.png'
import bodyflex from '../../../image/bodyflex.png'
import style from './Card.module.scss'

const Card = ({ card, thisPage }) => {

	let isProfile = false
	const navigate = useNavigate()

	if (thisPage === "profile") {
		isProfile = true
	}

	const handleClickCard = () => {
		if (isProfile === true) {
			setIsModalActive(!isModalActive)
		} else {
			navigate(`/course/${card}`)
		}
	}

	const [isModalActive, setIsModalActive] = useState(false)

	const getImg = () => {
		switch (card) {
		case 'yoga':
			return {
				src: yoga,
				alt: 'Йога',
			};
		case 'stretching':
			return {
				src: stretching,
				alt: 'Стретчинг',
			};
		case 'step_aerobics': 
			return {
				src: step_aerobics,
				alt: 'Степ-аэробика',
			};
		case 'dance_fitness':
			return {
				src: dance_fitness,
				alt: 'Танцевальный фитнес',
			};
		case 'bodyflex':
			return {
				src: bodyflex,
				alt: 'Бодифлекс',
			};

		default:
			break
		}
	}

	const { src, alt } = getImg()

	return (
		<div onClick={handleClickCard}>
			<img className={style.card} src={src} alt={alt}/>
			{isProfile && (
				<ModalForCooseWorkout
					course={card}
					isActive={isModalActive}
					setIsActive={setIsModalActive}
				/>
			)}
		</div>
	)
}

export default Card
