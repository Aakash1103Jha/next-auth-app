import { Document, Model } from "mongoose";

interface IUser {
	email: string;
	password: string;
}

export interface IUserDocument extends Document, IUser {}

export interface IUserModel extends Model<IUserDocument> {}
