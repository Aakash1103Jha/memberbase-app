import { FormEventHandler, type FC, useRef, useState, useEffect } from "react";

import styles from "./subscribe.module.css";
import { PageContainer } from "../Container";
import { Button } from "../Button";
import { Textbox } from "../Textbox";

const Subscribe: FC = () => {
	const _emailRef = useRef<HTMLInputElement>(null);
	const [message, setMessage] = useState("");

	const onSubscribeClicked: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		if (_emailRef.current) {
			const email = _emailRef.current.value;
			if (!email) return setMessage("Email is required");
			try {
				const res = await fetch(`/api/subscribe?user=${email}`);
				const data = await res.json();
				if (!res.ok) {
					_emailRef.current.value = "";
					return setMessage(data);
				}
			} catch (error) {
				console.error(error);
				return setMessage((error as Error).message);
			}
		} else return;
	};

	useEffect(() => {
		if (message) alert(message);
		return () => {
			setMessage("");
		};
	}, [message]);

	return (
		<section className={`${styles.subscribe_section}`}>
			<PageContainer>
				<h1>Get more great resources</h1>
				<h3>Get the latest design resources from across the web. Straight to your inbox.</h3>
				<form onSubmit={onSubscribeClicked} className={`${styles.subscribe_section_cta}`}>
					<Textbox ref={_emailRef} placeholder="Enter your email" type="email" />
					<Button label="Subscribe" />
				</form>
			</PageContainer>
		</section>
	);
};

export default Subscribe;

