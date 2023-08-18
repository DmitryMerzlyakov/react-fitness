import bodytitle from '../../../image/bodytitle.png'
import dancetitle from '../../../image/dancetitle.png'
import steptitle from '../../../image/steptitle.png'
import stretchingtitle from '../../../image/stretchingtitle.png'
import yogatitle from '../../../image/yogatitle.jpeg'
import style from '../Course.module.scss'


const Top = ({ card }) => {

	const getImg = () => {
		switch (card) {
			case 'yoga':
				return {
					src: yogatitle,
					alt: 'Йога',
				};
			case 'stretching':
				return {
					src: stretchingtitle,
					alt: 'Стретчинг',
				};
			case 'step_aerobics':
				return {
					src: steptitle,
					alt: 'Степ-аэробика',
				};
			case 'dance_fitness':
				return {
					src: dancetitle,
					alt: 'Танцевальный фитнес',
				};
			case 'bodyflex':
				return {
					src: bodytitle,
					alt: 'Бодифлекс',
				};

			default:
				break
		}
	};

	const { src, alt } = getImg();
	return (
		<>
			<p className={style.header__text} >{alt}</p>
			<img
				className={style.header__image}
				src={src}
				alt={alt}
			/>
		</>
	)
}

export default Top