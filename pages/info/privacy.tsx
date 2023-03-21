import { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/privacy.module.css";

import { PageContainer } from "@/components/Container";
import { sendAnalytics } from "@/lib/sendAnalytics";
import { useEffectOnce } from "@/hooks/useEffectOnce";

const Privacy: NextPage = () => {
	useEffectOnce(() => {
		sendAnalytics();
	});
	return (
		<>
			<Head>
				<title>MemberBase - Privacy</title>
			</Head>
			<div className={`${styles.privacy_page}`}>
				<PageContainer>
					<h1>Privacy Policy</h1>
				</PageContainer>
			</div>
		</>
	);
};

export default Privacy;

