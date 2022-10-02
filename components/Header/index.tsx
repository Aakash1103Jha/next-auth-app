import { ComponentPropsWithRef, type FC } from "react";

import LOGO from "../../assets/svg/spotify.svg";

import styles from "./Header.module.css";

const Header: FC<ComponentPropsWithRef<"header">> = (props) => {
	const { className, children, style, ...rest } = props;
	return (
		<header
			className={`${styles.header} ${className}`}
			style={style}
			{...rest}>
			{children}
		</header>
	);
};

export default Header;
