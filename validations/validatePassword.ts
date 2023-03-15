import { PATTERNS } from "@/constants/patterns";

export const validatePassword = (password: string) => {
	if (!password) return false;
	if (PATTERNS.REGEX.PASSWORD.test(password)) return true;
	return false;
};

