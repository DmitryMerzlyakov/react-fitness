import bodytitle from '../../../image/bodytitle.png'
import dancetitle from '../../../image/dancetitle.png'
import steptitle from '../../../image/steptitle.png'
import stretchingtitle from '../../../image/stretchingtitle.png'
import yogatitle from '../../../image/yogatitle.png'
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
			<img
				className={style.header}
				src={src}
				alt={alt}
			/>
	);
};

export default Top