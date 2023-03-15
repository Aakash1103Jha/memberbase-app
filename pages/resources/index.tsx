import { NextPage } from "next";

import styles from "@/styles/resources.module.css";
import Head from "next/head";
import { PageContainer } from "@/components/Container";
import { Subscribe } from "@/components";

const Resources: NextPage = () => {
	return (
		<>
			<Head>
				<title>MemberBase - Resources</title>
			</Head>
			<div className={`${styles.resources_page}`}>
				<PageContainer>
					<h1>Resources</h1>
				</PageContainer>
			</div>
			<Subscribe />
		</>
	);
};

export default Resources;

