import { NextPage } from "next";

import Head from "next/head";

import styles from "@/styles/tnc.module.css";

import { PageContainer } from "@/components/Container";
import { sendAnalytics } from "@/lib/sendAnalytics";
import { useEffectOnce } from "@/hooks/useEffectOnce";

import CONFIG from "@/config/tnc.config.json";

const TnC: NextPage = () => {
	useEffectOnce(() => {
		sendAnalytics();
	});
	const ListItem = (data: { title: string; text: string[] }) => {
		return (
			<div className={`${styles.tnc_page_list_item}`}>
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
				<title>MemberBase - Terms & Conditions</title>
			</Head>
			<PageContainer>
				<div className={`${styles.tnc_page}`}>
					<h1>Terms & Conditions</h1>
					<h2>
						Welcome to our website! Please read the following terms and conditions carefully before using our site.
					</h2>
					<ol className={`${styles.tnc_page_list}`}>
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

export default TnC;

