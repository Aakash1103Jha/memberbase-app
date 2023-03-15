import { NextPage } from "next";

import styles from "@/styles/contact.module.css";
import Head from "next/head";

const Contact: NextPage = () => {
	return (
		<>
			<Head>
				<title>MemberBase - Contact</title>
			</Head>
			<div className={`${styles.contact_page}`}>
				<h1>Contact</h1>
			</div>
		</>
	);
};

export default Contact;

