export interface IAuth {
	email: string;
	password: string;
}
export interface IAuthRequestData extends IAuth {
	action: "signin" | "signup";
}
