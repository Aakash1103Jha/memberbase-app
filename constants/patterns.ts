export const PATTERNS = {
	REGEX: {
		EMAIL: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
		PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/gm,
	},
};

