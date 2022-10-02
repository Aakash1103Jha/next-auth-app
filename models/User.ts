import { Schema, model, models } from "mongoose";
import { IUserDocument, IUserModel } from "../interfaces/IUser";

const UserSchema = new Schema<IUserDocument, IUserModel>({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = models.User || model<IUserDocument, IUserModel>("User", UserSchema);

export default User;
