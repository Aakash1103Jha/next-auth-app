import { compare, genSalt, hash } from "bcrypt";

import { IAuth } from "../interfaces/ICredentials";
import User from "../models/User";

const signUpController = async ({ email, password }: IAuth) => {
	if (!email || !password) return { success: false, message: "Mandatory data missing!" };
	try {
		const user = await User.findOne({ email });
		if (user) return { success: false, message: "Email already in use" };
		const hashPassword = await hash(password, await genSalt(10));
		const _user = new User({ email, password: hashPassword });
		const newUser = await _user.save();
		return { success: false, message: "User found", data: newUser };
	} catch (error) {
		const { message } = error as Error;
		return { success: false, message };
	}
};

export default signUpController;
