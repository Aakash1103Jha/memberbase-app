import { type FC, ComponentPropsWithRef, forwardRef } from "react";

import styles from "./button.module.css";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
	label: string;
	btnStyle?: "primary" | "outline" | "text" | "secondary";
}

const Button: FC<ButtonProps> = (props) => {
	const { className, style, onClick, label, btnStyle = "primary", disabled = false, ...rest } = props;
	return (
		<button
			className={`${styles.button} ${styles[`button_${btnStyle}`]} ${className}`}
			style={style}
			onClick={onClick}
			disabled={disabled}
			{...rest}>
			{label}
		</button>
	);
};

Button.displayName = "Button";

export default Button;

