import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/router";

import styles from "@/styles/register.module.css";

import { PageContainer } from "@/components/Container";
import { Button, Textbox } from "@/components";

const Register: NextPage = () => {
	const router = useRouter();
	const [error, setError] = useState<string | undefined>(undefined);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onFullNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setError("");
		return setFullName(e.target.value);
	};
	const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setError("");
		return setEmail(e.target.value);
	};
	const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setError("");
		return setPassword(e.target.value);
	};
	const onRegister: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				body: JSON.stringify({ email, password, fullName }),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			if (!res.ok) return setError(data);
			return router.replace("/auth/login");
		} catch (error) {
			return setError("Failed to register. Please try again");
		}
	};
	return (
		<>
			<Head>
				<title>MemberBase - Register</title>
			</Head>
			<div className={`${styles.register_page}`}>
				<PageContainer>
					<form className={`${styles.register_form}`} onSubmit={onRegister}>
						<div className={`${styles.register_form_header}`}>
							<h1>Register</h1>
							<h3>Fill in the details to get started</h3>
						</div>
						<div className={`${styles.register_form_fields}`}>
							<Textbox
								label="Full Name"
								placeholder="Your full name"
								required
								type="search"
								value={fullName}
								onChange={onFullNameChange}
							/>
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
							<Button label="Register" />
						</div>
						<p className={`${styles.register_form_cta}`}>
							{`Already have an account? `}
							<Link href={"/auth/login"}>Login</Link>
						</p>
					</form>
				</PageContainer>
			</div>
		</>
	);
};

export default Register;

