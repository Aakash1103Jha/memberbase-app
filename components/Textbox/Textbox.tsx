import { forwardRef, type FC, ComponentPropsWithRef } from "react";

import styles from "./textbox.module.css";

export interface TextboxProps extends ComponentPropsWithRef<"input"> {
	label?: string;
}

const Textbox: FC<TextboxProps> = forwardRef((props, ref) => {
	const { className, label, style, value, onChange, required, type = "search", ...rest } = props;
	return (
		<div className={`${styles.textbox_container}`}>
			{label?.length ? (
				<label>
					{label}
					{required ? <span className="required"> *</span> : null}
				</label>
			) : null}
			<input
				ref={ref}
				className={`${styles.textbox} ${className}`}
				style={style}
				value={value}
				onChange={onChange}
				required={required}
				type={type}
				{...rest}
			/>
		</div>
	);
});

Textbox.displayName = "Textbox";

export default Textbox;

