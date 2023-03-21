import { NextPage } from "next";

import Head from "next/head";

import styles from "@/styles/tnc.module.css";

import { PageContainer } from "@/components/Container";
import { sendAnalytics } from "@/lib/sendAnalytics";
import { useEffectOnce } from "@/hooks/useEffectOnce";

const TnC: NextPage = () => {
	useEffectOnce(() => {
		sendAnalytics();
	});
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

