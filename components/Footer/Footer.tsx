import { type FC } from "react";
import Link from "next/link";

import styles from "./footer.module.css";

import { PageContainer } from "../Container/PageContainer";

import LOGO from "@/assets/svg/memberbase.svg";

const FOOTER_CONFIG = [
	{
		group: "Website",
		children: [
			{
				label: "Home",
				url: "/",
			},
			{
				label: "Resources",
				url: "/resources",
			},
			{
				label: "Contact",
				url: "/contact",
			},
			{
				label: "Terms & Conditions",
				url: "/info/tnc",
			},
			{
				label: "Privacy Policy",
				url: "/info/privacy",
			},
		],
	},
	{
		group: "Membership",
		children: [
			{
				label: "Login",
				url: "/auth/login",
			},
			{
				label: "Register",
				url: "/auth/register",
			},
		],
	},
	{
		group: "Admin",
		children: [
			{
				label: "",
				url: "",
			},
		],
	},
];
const Footer: FC = () => {
	return (
		<footer className={`${styles.footer}`}>
			<PageContainer className={`${styles.footer_container}`}>
				<div className={`${styles.footer_info}`}>
					<LOGO className="logo_svg" />
					<p>Powered by NextJS</p>
					<p>© 2023 MemberBase. All Rights Reserved</p>
				</div>
				<div className={`${styles.footer_links}`}>
					{FOOTER_CONFIG.map((node) => (
						<div key={node.group} className={`${styles.footer_link_col}`}>
							<h4>{node.group}</h4>
							{node.children?.map((child) => (
								<Link key={child.label} href={child.url}>
									<p>{child.label}</p>
								</Link>
							))}
						</div>
					))}
				</div>
			</PageContainer>
		</footer>
	);
};

export default Footer;

