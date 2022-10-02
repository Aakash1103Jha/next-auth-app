import { FC } from "react";

import styles from "./Loader.module.css";

interface LoaderProps {
	label?: string;
}

const Loader: FC<LoaderProps> = ({ label }) => {
	return (
		<div className={`${styles.loader_wrapper}`}>
			<div className={`${styles.loader_items}`}>
				<div className={`${styles.loader_item}`}></div>
				<div className={`${styles.loader_item}`}></div>
				<div className={`${styles.loader_item}`}></div>
				<div className={`${styles.loader_item}`}></div>
			</div>
			{label && <p>{label}</p>}
		</div>
	);
};

export default Loader;
