import { NextPage } from "next";

import styles from "@/styles/homepage.module.css";
import { Button } from "@/components";
import { PageContainer } from "@/components/Container/PageContainer";
import Head from "next/head";

const Homepage: NextPage = () => {
	return (
		<>
			<Head>
				<title>MemberBase - Home</title>
			</Head>
			<div className={`${styles.homepage}`}>
				<section className={`${styles.hero}`}>
					<PageContainer>
						<div className={`${styles.hero_col_left}`}>
							<h1>Access a library of free design resources</h1>
							<h2>The best resources and books from around the web, collected and curated for your reading.</h2>
							<Button label="Get Access Now" />
						</div>
						<div className={`${styles.hero_col_right}`}>s</div>
					</PageContainer>
				</section>
			</div>
		</>
	);
};

export default Homepage;

