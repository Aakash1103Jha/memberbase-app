import { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/homepage.module.css";

import { Button, Subscribe } from "@/components";
import { PageContainer } from "@/components/Container/PageContainer";
import { useRouter } from "next/router";

const Homepage: NextPage = () => {
	const router = useRouter();
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
							<Button label="Get Access Now" onClick={() => router.push("/resources")} />
						</div>
						<div className={`${styles.hero_col_right}`}></div>
					</PageContainer>
				</section>
			</div>
			<Subscribe />
		</>
	);
};

export default Homepage;

