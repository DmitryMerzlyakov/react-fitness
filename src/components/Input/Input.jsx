import style from './Input.module.scss'

const Input = ({ type, onChange, placeholder, uniqueClass, max, min }) => {

    const handleChange = (e) => {
        onChange(e);
	}
	
	return (
		<div className={style.form}>
			<input
				placeholder={placeholder}
				type={type}
				onChange={handleChange}
				className={uniqueClass ? uniqueClass : style.input}
				max={max}
				min={min}
			/>
		</div>
	)
}

export default Input