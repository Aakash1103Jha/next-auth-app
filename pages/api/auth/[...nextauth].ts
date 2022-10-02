import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

import { signInCtrl, signUpCtrl } from "../../../controllers";
import { IAuthRequestData } from "../../../interfaces/ICredentials";

enum AUTH_ACTION_TYPE {
	SIGN_IN = "signin",
	SIGN_UP = "signup",
}

const AuthOptions: NextAuthOptions = {
	providers: [
		Credentials({
			name: "credentials",
			credentials: {},
			authorize: async (credentials, req) => {
				//TODO: Test with real data and login/register flow
				const { email, password, action } = credentials as IAuthRequestData;
				// if (action === AUTH_ACTION_TYPE.SIGN_IN) {
				// 	return await signInCtrl({ email, password });
				// }
				if (action === AUTH_ACTION_TYPE.SIGN_UP) {
					return await signUpCtrl({ email, password });
				}
				return { email };
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/auth/signin",
		newUser: "/auth/signup",
	},
};

export default NextAuth(AuthOptions);
