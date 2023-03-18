import { GetServerSideProps, NextPage } from "next";

import styles from "@/styles/resource.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { PageContainer } from "@/components/Container";

const Resource: NextPage = () => {
	const { resourceId } = useRouter().query as { resourceId: string };

	return (
		<>
			<Head>
				<title>MemberBase - Resource</title>
			</Head>
			<div className={`${styles.resource_page}`}>
				<PageContainer>
					<h1>Resource</h1>
					{resourceId ? <h2>{resourceId}</h2> : null}
				</PageContainer>
			</div>
		</>
	);
};

export default Resource;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { resourceId } = ctx.query as { resourceId: string };
	if (!resourceId) {
		return {
			redirect: {
				destination: "/resources",
				statusCode: 404,
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
};

