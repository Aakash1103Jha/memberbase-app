import { FormEventHandler, type FC, useRef, useState, useEffect } from "react";

import styles from "./subscribe.module.css";
import { PageContainer } from "../Container";
import { Button } from "../Button";
import { Textbox } from "../Textbox";

const Subscribe: FC = () => {
	const _emailRef = useRef<HTMLInputElement>(null);

	const onSubscribeClicked: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		if (_emailRef.current) {
			const email = _emailRef.current.value;
			if (!email) return alert("Email is required to subscribe!");
			try {
				const res = await fetch(`/api/subscribe?email=${email}`, {
					method: "POST",
				});
				const data = await res.json();
				if (!res.ok) {
					_emailRef.current.value = "";
					return alert(data);
				}
				_emailRef.current.value = "";
				return alert(data);
			} catch (error) {
				console.error(error);
				return alert((error as Error).message);
			}
		} else return;
	};

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

