import { NextPage } from "next";

import styles from "@/styles/tnc.module.css";
import Head from "next/head";
import { PageContainer } from "@/components/Container";

const TnC: NextPage = () => {
	return (
		<>
			<Head>
				<title>MemberBase - Terms & Conditions</title>
			</Head>
			<PageContainer>
				<div className={`${styles.tnc_page}`}>
					<h1>Terms & Conditions</h1>
				</div>
			</PageContainer>
		</>
	);
};

export default TnC;

