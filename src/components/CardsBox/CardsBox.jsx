import { Card } from './Card'
import style from './CardsBox.module.scss'

const CardsBox = ({ thisPage, course }) => {

	return (
		<div className={style.cardsBox}>
			{course.map((name, index) => (
				<Card key={index} thisPage = {thisPage === 'profile' ? 'profile' : 'main'} card={name} />
			))}
		</div>
	);
};

export default CardsBox
