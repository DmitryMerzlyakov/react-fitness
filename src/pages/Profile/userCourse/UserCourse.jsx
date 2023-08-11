import { useSelector } from 'react-redux'
import { selectUserCourses } from '../../../redux/selectors'

import { CardsBox } from '../../../components/CardsBox'

import style from './UserCourse.module.scss'

const UserCourse = () => {
	const courses = useSelector(selectUserCourses)

	if (!courses) return console.log('Загрузка курсов')
	const coursesName = Object.keys(courses)

	return (
		<div className={style.courses}>
			<CardsBox course={coursesName} thisPage='profile' />
		</div>
	);
};

export default UserCourse
