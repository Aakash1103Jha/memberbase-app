import { NextPage } from "next";

import styles from "@/styles/privacy.module.css";
import Head from "next/head";

const Privacy: NextPage = () => {
	return (
		<>
			<Head>
				<title>MemberBase - Privacy</title>
			</Head>
			<div className={`${styles.privacy_page}`}>
				<h1>Privacy Policy</h1>
			</div>
		</>
	);
};

export default Privacy;

