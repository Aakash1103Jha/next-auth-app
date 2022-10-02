import { ComponentPropsWithRef, type FC } from "react";

import styles from "./Form.module.css";

import LOGO from "../../assets/svg/spotify.svg";
import Header from "../Header";

const Form: FC<ComponentPropsWithRef<"form">> = (props) => {
	const { children, style, className, onSubmit, ...rest } = props;
	return (
		<form
			onSubmit={onSubmit}
			className={`${styles.form} ${className}`}
			style={style}
			{...rest}>
			{children}
		</form>
	);
};

export default Form;
