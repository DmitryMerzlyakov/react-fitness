import { useEffect, useState } from 'react'

import style from './Bar.module.scss'

const Bar = ({ completed, color, wrapperClass }) => {
	const [filled, setFilled] = useState(0)
	const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		setIsRunning(true)
		if (filled < completed && isRunning) {
			setTimeout(() => setFilled((prev) => (prev += 5)), 50)
		} else if (filled > completed && isRunning) {
			setTimeout(() => setFilled((prev) => (prev -= 5)), 50)
		}
    }, [filled, isRunning, completed])
    
	return (
		<div className={`${style.wrapper} ${style[wrapperClass]}`}>
			<div
				style={{
					height: '100%',
					width: `${filled}%`,
					backgroundColor: `${color}`,
					transition: 'width 0.5s',
					borderRadius: '22px',
				}}
			></div>
			<span className={style.label}>{Math.round(completed)}%</span>
		</div>
	)
}

export default Bar