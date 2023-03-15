import { NextPage } from "next";

import styles from "@/styles/resources.module.css";
import Head from "next/head";

const Resources: NextPage = () => {
	return (
		<>
			<Head>
				<title>MemberBase - Resources</title>
			</Head>
			<div className={`${styles.resources_page}`}>
				<h1>Resources</h1>
			</div>
		</>
	);
};

export default Resources;

