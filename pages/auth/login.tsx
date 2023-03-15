import { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/login.module.css";

import LOGO from "@/assets/svg/memberbase.svg";
import { PageContainer } from "@/components/Container";
import { Button, Textbox } from "@/components";
import Link from "next/link";

const Login: NextPage = () => {
	return (
		<>
			<Head>
				<title>MemberBase - Login</title>
			</Head>
			<div className={`${styles.login_page}`}>
				<PageContainer>
					<form className={`${styles.login_form}`}>
						<div className={`${styles.login_form_header}`}>
							<h1>Log in</h1>
							<h3>Fill in your login details below</h3>
						</div>
						<div className={`${styles.login_form_fields}`}>
							<Textbox label="Email" placeholder="Your email" required type="email" />
							<Textbox label="Password" placeholder="Your Password" required type="password" />
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

export default Login;

