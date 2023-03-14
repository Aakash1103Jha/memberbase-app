import { type FC, ComponentPropsWithRef } from "react";

import styles from "./pageContainer.module.css";

export interface pageContainerProps extends ComponentPropsWithRef<"section"> {}

const PageContainer: FC<pageContainerProps> = (props) => {
	const { className, style, children, ...rest } = props;
	return (
		<section className={`${styles.pageContainer} ${className}`} style={style} {...rest}>
			{children}
		</section>
	);
};

export default PageContainer;

