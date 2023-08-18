import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentWorkout } from '../../redux/slices/user'

import style from './ButtonForChoose.module.scss'
import done from '../../image/done.png'

const ButtonForChoose = ({ exercise, id, completed }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChooseWorkout = () => {
        dispatch(setCurrentWorkout({ currentWorkout: id }))
        navigate('/workout')
        console.log(id, exercise)
    }

    return (
        <button className={`${completed ? style.done : style.button}`} onClick={handleChooseWorkout}>
            <div className={style.wrapper}>
                {completed ? <img className={style.image} src={done} /> : ''}
                <p className={style.button__title}>{exercise}</p>
            </div>
        </button>
    )
}

export default ButtonForChoose