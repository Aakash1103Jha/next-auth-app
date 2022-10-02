import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import Button from "../components/Button";
import Loader from "../components/Loader";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const { status } = useSession();

	if (status === "loading") return <Loader />;

	return (
		<div className={styles.home}>
			<div className={styles.home_cta}>
				{status === "unauthenticated" && (
					<>
						<Button
							label="Sign In"
							onClick={() => signIn()}
						/>
						<Button
							label="Sign Up"
							onClick={() => signIn()}
						/>
					</>
				)}
				{status === "authenticated" && (
					<Button
						label="Sign out"
						onClick={() => signOut()}
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
