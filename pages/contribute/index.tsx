import { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/contribute.module.css";

import { PageContainer } from "@/components/Container";
import { Textarea, Textbox } from "@/components";

const Contribute: NextPage = () => {
	return (
		<>
			<Head>
				<title>MemberBase - Become a contributor</title>
			</Head>
			<div className={`${styles.contribute_page}`}>
				<PageContainer>
					<div>
						<header>
							<h1>Wanna join as a contributor?</h1>
							<h2>Sharing knowledge is good, hoarding is not</h2>
						</header>
						<form className={`${styles.contribute_form}`}>
							<Textbox placeholder="Your first name" label="First Name" required />
							<Textbox placeholder="Your last name" label="Last Name" required />
							<Textbox placeholder="Your email address" label="Email" required />
							<Textbox placeholder="Your profession" label="Occupation / Profession" required />
							<Textbox placeholder="Your contact number (optional)" label="Contact Number" type="" />
							<Textarea
								required
								label="Describe your content"
								placeholder="Please describe the kind of resources you plan to add in about 50 words or more"
							/>
						</form>
					</div>
					<div className={`${styles.contribute_bg_container}`}></div>
				</PageContainer>
			</div>
		</>
	);
};

export default Contribute;

