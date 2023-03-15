import { GetServerSideProps, NextPage } from "next";

import styles from "@/styles/resources.module.css";
import Head from "next/head";
import { PageContainer } from "@/components/Container";
import { Subscribe } from "@/components";
import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await getServerSession(ctx.req, ctx.res, OPTIONS);
	if (!session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
};

