import { FormEventHandler, useState } from "react";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import Link from "next/link";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";

import LOGO from "../../assets/svg/spotify.svg";

import styles from "../../styles/SignIn.module.css";
import { IAuthRequestData } from "../../interfaces/ICredentials";
import Router from "next/router";
import Loader from "../../components/Loader";

const SignIn: NextPage = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSignIn: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		const data: IAuthRequestData = {
			email,
			password,
			action: "signin",
		};
		const res = await signIn("credentials", {
			...data,
			redirect: false,
		});
		if (res && res.ok) return Router.replace("/");
	};

	if (isLoading === true) return <Loader />;

	return (
		<div className={`${styles.signIn_page}`}>
			<Header style={{ marginBottom: "3rem" }}>
				<LOGO />
			</Header>
			<Form onSubmit={handleSignIn}>
				<div className={`${styles.signIn_options}`}>
					<p>To continue, log in to Spotify</p>
					<Button
						style={{ background: "var(--blue-fb)", color: "var(--white)" }}
						label="CONTINUE WITH FACEBOOK"
					/>
					<Button
						style={{ background: "var(--black)", color: "var(--white)" }}
						label="CONTINUE WITH APPLE"
					/>
					<Button
						style={{ background: "var(--white)", color: "var(--black)", border: "1px solid var(--black)" }}
						label="CONTINUE WITH GOOGLE"
					/>
				</div>
				<div className={`${styles.divider_wrapper}`}>
					<div className={`${styles.divider}`}></div>
					<p>OR</p>
				</div>
				<label htmlFor="_email_">Email</label>
				<Input
					id="_email_"
					placeholder="name@example.com"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="_password_">Password</label>
				<Input
					id="_password_"
					placeholder="**********"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Link
					passHref
					href={"/auth/forgot-password"}>
					<a>Forgot your password?</a>
				</Link>
				<div className={`${styles.auth_action_confirmation}`}>
					<span>
						<input
							id="_remember_me_"
							type="checkbox"
						/>
						<label htmlFor="_remember_me_">Remember Me</label>
					</span>
					<Button label="LOG IN" />
				</div>
			</Form>
		</div>
	);
};

export default SignIn;
