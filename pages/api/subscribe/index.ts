import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const subscribeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") return res.status(500).json("Not allowed!");
	const { email } = req.query as { email: string };
	try {
		const _subscriber = await prisma.subscribers.findFirst({ where: { email } });
		if (_subscriber) res.status(400).json("Email already used to subscribe. Please try with another one");
		await prisma.subscribers.create({ data: { email } });
		return res.status(200).json("Thanks! You've been added to our mailing list!");
	} catch (error) {
		console.error(error);
		return res.status(500).json("Something went wrong. Please try again");
	}
};

export default subscribeHandler;

