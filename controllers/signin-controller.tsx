import { compare } from "bcrypt";

import { IAuth } from "../interfaces/ICredentials";
import User from "../models/User";

const signInController = async ({ email, password }: IAuth) => {
	if (!email || !password) return { success: false, message: "Mandatory data missing!" };
	try {
		const user = await User.findOne({ email });
		if (!user) return { success: false, message: "User does not exist" };
		const isPasswordValid = await compare(password, user.password);
		if (!isPasswordValid) return { success: false, message: "Incorrect password!" };
		return { success: false, message: "User found", data: user };
	} catch (error) {
		const { message } = error as Error;
		return { success: false, message };
	}
};

export default signInController;
