import { useState } from 'react'

import { ButtonForClick } from '../../../components/ButtonForClick'
import { ModalForSetProgress } from '../../../components/Modals/ForSetProgress'
import { ModalForComplete } from '../../../components/Modals/ForCopmplete'

import style from './Exercises.module.scss'

const Exercises = ({ courseName, exercises }) => {
    const [visible, setVisible] = useState(false)
    const [complete, setComplete] = useState(false)

    const exerciseNames = exercises.map((ex) => ex.name)
    const handleOpenModalForSetProgress = () => {
        setVisible(prev => !prev)
    }

    return (
        <div className={style.wrapper}>
            <p className={style.title}>Упражнения</p>
            <ul className={style.exercises}>
                {exerciseNames.map((name, i) => {
                    return (
                        <li key={i} className={style.exercises__list}>
                            {name}
                        </li>
                    )
                })}
            </ul>

            <ButtonForClick text={'Заполнить свой прогресс'} onClick={handleOpenModalForSetProgress} />
            {visible && <ModalForSetProgress
                courseName={courseName}
                exercises={exercises}
                visible={visible}
                setVisible={setVisible}
                setComplete={setComplete}
            />}
            {complete && <ModalForComplete
                visible={complete}
                setVisible={setComplete}
                title='Ваш прогресс засчитан!'
            />}
        </div>
    )
}

export default Exercises