import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/slices/user'

import { Login } from './login'
import { Registration } from './registration'

import style from './Auth.module.scss'

export default function Auth({ login }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const localId = localStorage.getItem('userID')
        const localEmail = localStorage.getItem('userEmail')
        if (!localId || !localEmail) return
        dispatch(setLogin({ userId: localId, email: localEmail }))
        navigate('/profile')
    }, [dispatch, navigate])

    return (
        <div className={style.auth}>
           { login ? ( <Login /> ) : ( <Registration/> ) }
        </div> 
    )
 }