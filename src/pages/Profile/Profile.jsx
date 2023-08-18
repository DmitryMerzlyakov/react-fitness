import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useGetUserByIdQuery } from '../../redux/services/usersApi'
import { selectUserId, selectUserCourses } from '../../redux/selectors'
import { setUserInfo } from '../../redux/slices/user'

import { Header } from '../../components/Header'
import { UserInfo } from './userInfo'
import { UserCourse } from './userCourse'

import style from './Profile.module.scss'

export default function Profile() {

    const dispatch = useDispatch()
    const selectCourse = useSelector(selectUserCourses)

    const userId = useSelector(selectUserId)
    const { isSuccess, data } = useGetUserByIdQuery(userId)
    useEffect(() => {
        isSuccess && data && dispatch(setUserInfo(data))
    }, [isSuccess])

    return (
        <div className={style.wrapper}>
            <Header />
            <UserInfo />
            <div className={style.course}>
                <h2 className={style.course__title}>Mои курсы</h2>
                {
                    selectCourse ?
                        (
                            <UserCourse />
                        ) :
                        (
                            <p className={style.course__text}>Пока ни один курс не был добавлен</p>
                        )
                }


            </div>
        </div>

    )
}
