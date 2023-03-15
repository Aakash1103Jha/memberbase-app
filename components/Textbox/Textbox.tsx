import { forwardRef, type FC, ComponentPropsWithRef } from "react";

import styles from "./textbox.module.css";

export interface TextboxProps extends ComponentPropsWithRef<"input"> {}

const Textbox: FC<TextboxProps> = forwardRef((props, ref) => {
	const { className, style, value, onChange, required, type = "search", ...rest } = props;
	return (
		<input
			ref={ref}
			className={`${styles.textbox} ${className}`}
			style={style}
			value={value}
			onChange={onChange}
			required={required}
			{...rest}
		/>
	);
});

Textbox.displayName = "Textbox";

export default Textbox;
