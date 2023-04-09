import { useState } from "react";

const strengthLabels = ["weak", "medium", "strong"];

export const usePasswordStrength = () => {
	const [strength, setStrength] = useState("");

	const getStrength = (password: string) => {
		let strengthIndicator: number = -1;
		let upper = false,
			lower = false,
			numbers = false;

		for (let index = 0; index < password.length; index++) {
			let char = password.charCodeAt(index);
			if (!upper && char >= 65 && char <= 90) {
				upper = true;
				if (password.length >= 8) strengthIndicator++;
			}
			if (!numbers && char >= 48 && char <= 57) {
				numbers = true;
				if (password.length >= 8) strengthIndicator++;
			}
			if (!lower && char >= 97 && char <= 122) {
				lower = true;
				if (password.length >= 8) strengthIndicator++;
			}
		}
		password ? setStrength(strengthLabels[strengthIndicator] ?? "weak") : setStrength("");
		// setStrength(strengthLabels[strengthIndicator] ?? "weak");
	};
	return { strength, getStrength };
};

