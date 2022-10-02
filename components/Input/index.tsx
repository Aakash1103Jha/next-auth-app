import { ComponentPropsWithRef, type FC } from "react";

import styles from "./Input.module.css";

const Input: FC<ComponentPropsWithRef<"input">> = (props) => {
	const { placeholder, style, className, value, onChange, type, id, ...rest } = props;

	return (
		<input
			type={type}
			className={`${styles.input} ${className}`}
			style={style}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			{...rest}
		/>
	);
};

export default Input;
