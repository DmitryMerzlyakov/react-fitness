import { selectUserEmail } from '../../../redux/selectors'
import { useSelector } from 'react-redux'

import { ChangeUserData } from './changeUserData'

import style from './UserInfo.module.scss'

const UserInfo = () => { 

    const email = useSelector(selectUserEmail)
	if (!email) return
   
    return (
        <div className={style.user}>
			<h2 className={style.user__title}>Мой профиль</h2>
			<div className={style.user__data}>
				<p className={style.user__data_text}>Логин: {email}</p>
				<p className={style.user__data_text}>Пароль: ********* </p>
			</div>
			<ChangeUserData/>
		</div>
    )
}

export default UserInfo