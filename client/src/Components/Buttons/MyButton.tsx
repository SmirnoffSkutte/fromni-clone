import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './buttons.module.scss'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={styles.blueButton} {...rest}>
			{children}
		</button>
	)
}

export default MyButton
