import { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/privacy.module.css";

import { PageContainer } from "@/components/Container";
import { sendAnalytics } from "@/lib/sendAnalytics";
import { useEffectOnce } from "@/hooks/useEffectOnce";

import CONFIG from "@/config/privacy.config.json";

const Privacy: NextPage = () => {
	useEffectOnce(() => {
		sendAnalytics();
	});
	const ListItem = (data: { title: string; text: string[] }) => {
		return (
			<div className={`${styles.privacy_page_list_item}`}>
				<h3>{data.title}</h3>
				<ul>
					{data.text.map((node) => (
						<li key={node}>{node}</li>
					))}
				</ul>
			</div>
		);
	};
	return (
		<>
			<Head>
				<title>MemberBase - Privacy</title>
			</Head>
			<PageContainer>
				<div className={`${styles.privacy_page}`}>
					<h1>Privacy</h1>
					<h2>Welcome to our website! Please read the following privacy policy carefully before using our site.</h2>
					<ol className={`${styles.privacy_page_list}`}>
						{CONFIG.map((textNode) => (
							<li key={textNode.title}>
								<ListItem {...textNode} />
							</li>
						))}
					</ol>
				</div>
			</PageContainer>
		</>
	);
};

export default Privacy;

