import { NextPage } from "next";
import { useState, useReducer, FormEventHandler } from "react";
import Head from "next/head";

import styles from "@/styles/contact.module.css";

import { Button, Textbox } from "@/components";
import { PageContainer } from "@/components/Container";
import { sendAnalytics } from "@/lib/sendAnalytics";
import { useEffectOnce } from "@/hooks/useEffectOnce";

enum ACTION_TYPE {
	UPDATE_EMAIL = "update_email",
	UPDATE_MESSAGE = "update_message",
	UPDATE_FIRST_NAME = "update_first_name",
	UPDATE_LAST_NAME = "update_last_name",
}

interface State {
	email: string;
	message: string;
	firstName: string;
	lastName: string;
}

interface Action {
	type: ACTION_TYPE;
	payload: string;
}

const InitialState: State = {
	email: "",
	message: "",
	firstName: "",
	lastName: "",
};

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case ACTION_TYPE.UPDATE_EMAIL:
			return { ...state, email: action.payload };
		case ACTION_TYPE.UPDATE_MESSAGE:
			return { ...state, message: action.payload };
		case ACTION_TYPE.UPDATE_FIRST_NAME:
			return { ...state, firstName: action.payload };
		case ACTION_TYPE.UPDATE_LAST_NAME:
			return { ...state, lastName: action.payload };
		default:
			return state;
	}
};

const Contact: NextPage = () => {
	const [error, setError] = useState<string | undefined>("");
	const [state, dispatch] = useReducer(reducer, InitialState);

	const onSubmitContactForm: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
	};
	useEffectOnce(() => {
		sendAnalytics();
	});
	return (
		<>
			<Head>
				<title>MemberBase - Contact</title>
			</Head>
			<div className={`${styles.contact_page}`}>
				<PageContainer>
					<div className={`${styles.contact_page_form_container}`}>
						<header className={`${styles.contact_page_header}`}>
							<h3>Contact</h3>
							<h1>How can we help you?</h1>
							<p>Reach out to inquire about an ebook, submit an ebook, or with any other inquiry you might have.</p>
						</header>
						<form className={`${styles.contact_page_form}`}>
							<Textbox
								required
								label="First Name"
								placeholder="Your first name"
								value={state.firstName}
								onChange={(e) => dispatch({ payload: e.target.value, type: ACTION_TYPE.UPDATE_FIRST_NAME })}
							/>
							<Textbox
								required
								label="Last Name"
								placeholder="Your last name"
								value={state.lastName}
								onChange={(e) => dispatch({ payload: e.target.value, type: ACTION_TYPE.UPDATE_LAST_NAME })}
							/>
							<Textbox
								required
								label="Email"
								placeholder="example@email.com"
								value={state.email}
								onChange={(e) => dispatch({ payload: e.target.value, type: ACTION_TYPE.UPDATE_EMAIL })}
							/>
							<div className={`${styles.contact_page_form_textarea}`}>
								<label>
									Your message
									<span className="required"> *</span>
								</label>
								<textarea
									placeholder="Enter message here"
									value={state.message}
									onChange={(e) =>
										dispatch({ payload: e.target.value, type: ACTION_TYPE.UPDATE_MESSAGE })
									}></textarea>
							</div>
							{error ? <p className="error">{error}</p> : null}
							<Button label="Send Message" />
						</form>
					</div>
				</PageContainer>
			</div>
		</>
	);
};

export default Contact;

