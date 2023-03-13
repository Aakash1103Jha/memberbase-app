import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import { IUser } from "@/interfaces/IUser";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
		} & IUser &
			DefaultSession["user"];
		accessToken: string;
	}
}

// declare module "next-auth/jwt" {
// 	interface JWT {
// 		user: {
// 			id: string;
// 			name: string;
// 			image?: string;
// 			email: string;
// 		} & DefaultUser;
// 		id: string;
// 	}
// }

