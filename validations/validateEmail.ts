import { PATTERNS } from "@/config/patterns";

export const validateEmail = (email: string) => {
	if (!email) return false;
	if (PATTERNS.REGEX.EMAIL.test(email)) return true;
	return false;
};

