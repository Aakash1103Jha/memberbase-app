import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient, users } from "@prisma/client";

import prisma from "@/lib/prisma";

const TTL = Number(process.env.COOKIE_TTL) || 3600;

const prismaClient = new PrismaClient();

export const OPTIONS: NextAuthOptions = {
	providers: [
		Credentials({
			credentials: {},
			async authorize(credentials, req) {
				const { email, password } = credentials as users;
				if (!email) throw new Error("Email is required");
				if (!password) throw new Error("Password is required");
				const _user = await prisma.users.findFirst({ where: { email } });
				if (!_user)
					throw new Error(
						"User not found. Please check the email or if you don't have an account, register now. It's free!",
					);
				const isPasswordCorrect = await compare(password, _user.password);
				if (!isPasswordCorrect) throw new Error("Incorrect password");
				return { ..._user, id: _user.id.toString() };
			},
		}),
	],
	adapter: PrismaAdapter(prismaClient),
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		maxAge: TTL,
		strategy: "jwt",
	},
	debug: process.env.NODE_ENV === "development" ? true : false,
	jwt: { maxAge: TTL },
	callbacks: {
		jwt: async ({ token, user }) => {
			user && (token.user = user);
			return token;
		},
		session: async ({ session, token }) => {
			session.user = token.user as any;
			return session;
		},
	},
};

export default NextAuth(OPTIONS);

