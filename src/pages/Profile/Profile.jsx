import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useGetUserByIdQuery } from '../../redux/services/usersApi'
import { selectUserId } from '../../redux/selectors'
import { setUserInfo } from '../../redux/slices/user'

import { UserBox } from '../../components/UserBox'
import { UserInfo } from './userInfo'
import { UserCourse } from './userCourse'

import style from './Profile.module.scss'
import logo from '../../image/logo.png'

export default function Profile() {

    const dispatch = useDispatch();

	const userId = useSelector(selectUserId)
	const { isSuccess, data } = useGetUserByIdQuery(userId)
	useEffect(() => {
		isSuccess && data && dispatch(setUserInfo(data))
    }, [isSuccess])
    

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <img src={logo} alt="logo" />
                <UserBox />
            </header>
            <UserInfo/>
            <div className={style.course}>
                <h2 className={style.course__title}>Mои курсы</h2>
                <UserCourse />
            </div>
        </div>

    )
}
