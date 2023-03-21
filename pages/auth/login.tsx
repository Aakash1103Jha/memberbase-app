import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

import styles from "@/styles/login.module.css";

import { PageContainer } from "@/components/Container";
import { Button, Textbox } from "@/components";
import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]";
import { sendAnalytics } from "@/lib/sendAnalytics";
import { useEffectOnce } from "@/hooks/useEffectOnce";

const Login: NextPage<{ loggedIn: boolean }> = ({ loggedIn }) => {
	const router = useRouter();

	const [error, setError] = useState<string | undefined>(undefined);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setError("");
		return setEmail(e.target.value);
	};
	const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setError("");
		return setPassword(e.target.value);
	};

	useEffectOnce(() => {
		sendAnalytics();
	});

	const onLogin: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		try {
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
				callbackUrl: "/",
			});
			if (res?.error) return setError(res.error);
			return router.replace("/");
		} catch (error) {
			const { message } = error as Error;
			return setError(message);
		}
	};
	return (
		<>
			<Head>
				<title>MemberBase - Login</title>
			</Head>
			<div className={`${styles.login_page}`}>
				<PageContainer>
					<form className={`${styles.login_form}`} onSubmit={onLogin}>
						<div className={`${styles.login_form_header}`}>
							<h1>Log in</h1>
							<h3>Fill in your login details below</h3>
						</div>
						<div className={`${styles.login_form_fields}`}>
							<Textbox
								label="Email"
								placeholder="Your email"
								required
								type="email"
								value={email}
								onChange={onEmailChange}
							/>
							<Textbox
								label="Password"
								placeholder="Your Password"
								required
								type="password"
								value={password}
								onChange={onPasswordChange}
							/>
							{error ? <p className="error">{error}</p> : null}
							<Button label="Log in" />
						</div>
						<p className={`${styles.login_form_cta}`}>
							{`Don't have an account? `}
							<Link href={"/auth/register"}>Register</Link>
						</p>
					</form>
				</PageContainer>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await getServerSession(ctx.req, ctx.res, OPTIONS);
	if (session) {
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

export default Login;

