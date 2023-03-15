import { GetServerSideProps, NextPage } from "next";

import styles from "@/styles/resource.module.css";
import { useRouter } from "next/router";

const Resource: NextPage = () => {
	const { resourceId } = useRouter().query as { resourceId: string };

	return (
		<div className={`${styles.resource_page}`}>
			<h1>Resource</h1>
			{resourceId ? <h2>{resourceId}</h2> : null}
		</div>
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

