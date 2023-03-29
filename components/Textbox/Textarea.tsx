import { forwardRef, type FC, ComponentPropsWithRef } from "react";

import styles from "./textbox.module.css";

export interface TextareaProps extends ComponentPropsWithRef<"textarea"> {
	label?: string;
}

const Textarea: FC<TextareaProps> = forwardRef((props, ref) => {
	const { className, label, placeholder, style, value, onChange, required, ...rest } = props;
	return (
		<div className={`${styles.textarea_container}`}>
			{label?.length ? (
				<label>
					{label}
					{required ? <span className="required"> *</span> : null}
				</label>
			) : null}
			<textarea
				placeholder={placeholder}
				ref={ref}
				className={`${styles.textarea} ${className}`}
				style={style}
				value={value}
				onChange={onChange}
				required={required}
				{...rest}></textarea>
		</div>
	);
});

Textarea.displayName = "Textarea";

export default Textarea;

