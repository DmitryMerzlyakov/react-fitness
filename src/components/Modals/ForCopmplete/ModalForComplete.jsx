import { useRef } from 'react'

import style from './ModalForComplete.module.scss'

const ModalForComplete = ({ title, setVisible }) => {

    const modalRef = useRef()

    return (
        <div className={style.wrapper} onClick={() => { setVisible(prev => !prev) }} ref={modalRef}>
            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                <h2 className={style.heading}>{title}</h2>
            </div>
        </div>
    )
}

export default ModalForComplete