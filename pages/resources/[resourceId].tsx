import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";

import styles from "@/styles/resource.module.css";
import { PageContainer } from "@/components/Container";

const Resource: NextPage = () => {
	const router = useRouter();
	const { resourceId } = router.query as { resourceId: string };
	const { status } = useSession();

	useEffect(() => {
		if (status !== "authenticated") router.replace("/");
		return () => {};
	}, [status, router]);

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

