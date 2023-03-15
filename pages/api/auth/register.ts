import { NextApiRequest, NextApiResponse } from "next";
import { genSalt, hash } from "bcrypt";

import { validatePassword } from "@/validations/validatePassword";
import prisma from "@/lib/prisma";
import { users } from "@prisma/client";

const registerController = async (data: users) => {
	if (!data) throw new Error("Mandatory data missing");
	const { email, password } = data satisfies users;
	try {
		const user = await prisma.users.findFirst({ where: { email } });
		if (user) return { status: 400, error: "Email already in use" };
		const isStrongPassword = validatePassword(password);
		if (!isStrongPassword) return { status: 400, error: "Weak password. Please try again" };
		const hashPassword = await hash(password, await genSalt(15));
		const newUser = { ...data, password: hashPassword };

		const { id } = await prisma.users.create({ data: newUser });
		if (!id) return { status: 500, error: "Failed to register. Please try again" };
		return { status: 200, data: id };
	} catch (error) {
		const { message } = error as Error;
		return { status: 500, error: message };
	}
};

const register = async (req: NextApiRequest, res: NextApiResponse) => {
	if (!req.body) return res.status(400).json("Mandatory data missing");
	const { data, status, error } = await registerController(req.body satisfies users);
	if (error) return res.status(status).json(error);
	return res.status(status).json(data);
};

export default register;

