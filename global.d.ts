import { NextApiRequest } from "next";
import { JWTEncodeParams } from "next-auth/jwt";

declare module "next" {
	export interface Request extends NextApiRequest {
		user: JWTEncodeParams | string;
	}
}

