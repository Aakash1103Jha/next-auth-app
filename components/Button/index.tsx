import { ComponentPropsWithRef, type FC } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
	label: string;
}

const Button: FC<ButtonProps> = (props) => {
	const { label, className, style, onClick, ...rest } = props;
	return (
		<button
			className={`${styles.button} ${className}`}
			style={style}
			onClick={onClick}
			{...rest}>
			{label}
		</button>
	);
};

export default Button;
