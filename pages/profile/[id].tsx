import Head from "next/head";
import { NextPage, GetServerSideProps } from "next";

import styles from "@/styles/profile.module.css";
import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]";
import { PageContainer } from "@/components/Container";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Profile: NextPage<{ id: string }> = ({ id }) => {
	const { status, data } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status !== "authenticated") router.replace("/");
		return () => {};
	}, [status, router]);

	return status === "loading" ? (
		<p>Loading...</p>
	) : (
		<>
			<Head>
				<title>MemberBase - Home</title>
			</Head>
			<div className={`${styles.profile_page}`}>
				<PageContainer>
					<h3>Hey!👋 Welcome back!</h3>
					<div>
						<h1>{data?.user.fullName}</h1>
						<h2>{data?.user.email}</h2>
					</div>
				</PageContainer>
			</div>
		</>
	);
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await getServerSession(ctx.req, ctx.res, OPTIONS);
	if (!session) {
		return {
			redirect: {
				destination: "/auth/login",
				permanent: false,
			},
		};
	}
	const { id } = ctx.query as { id: string };
	return {
		props: { session, id },
	};
};

