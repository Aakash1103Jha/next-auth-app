import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";

import "../styles/globals.css";

import { Session } from "next-auth";

const MyApp = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
	return (
		<>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
};

export default MyApp;
