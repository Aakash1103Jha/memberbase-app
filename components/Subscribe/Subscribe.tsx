import { type FC } from "react";

import styles from "./subscribe.module.css";
import { PageContainer } from "../Container";
import { Button } from "../Button";

const Subscribe = () => {
	return (
		<section className={`${styles.subscribe_section}`}>
			<PageContainer>
				<h1>Get more great resources</h1>
				<h3>Get the latest design resources from across the web. Straight to your inbox.</h3>
				<div className={`${styles.subscribe_section_cta}`}>
					<input placeholder="Enter your email" />
					<Button label="Subscribe" />
				</div>
			</PageContainer>
		</section>
	);
};

export default Subscribe;

