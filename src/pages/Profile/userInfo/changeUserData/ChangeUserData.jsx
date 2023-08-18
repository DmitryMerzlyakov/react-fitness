import { useState } from 'react'

import { ModalForChangeData } from '../../../../components/Modals/ForChangeData'
import { ButtonForClick } from '../../../../components/ButtonForClick'

import style from './ChangeUserData.module.scss'

const ChangeUserData = () => {

    const [visibleLogin, setVisibleLogin] = useState(false)
    const [visiblePas, setVisiblePas] = useState(false)

    const handleOpenModalForLogin = () => {
        setVisibleLogin(!visibleLogin)
    }
    const handleOpenModalForPas = () => {
        setVisiblePas(!visiblePas)
    }

    return (
        <div className={style.wrapper}>
            {!visibleLogin && <ButtonForClick
                text={'Редактировать логин'}
                onClick={handleOpenModalForLogin}
            />}
            {visibleLogin && <ModalForChangeData
                type={'login'}
                visible={visibleLogin}
                setVisible={setVisibleLogin}
            />}
            {!visiblePas && <ButtonForClick
                text={'Редактировать пароль'}
                onClick={handleOpenModalForPas}
            />}
            {visiblePas && <ModalForChangeData
                type={'password'}
                visible={visiblePas}
                setVisible={setVisiblePas}
            />}
        </div>
    )
}

export default ChangeUserData