import { type FC, ComponentPropsWithRef } from "react";

import styles from "./navbar.module.css";
import Link from "next/link";

import { PageContainer } from "../Container/PageContainer";

import LOGO from "@/assets/svg/memberbase.svg";

export interface NavbarProps extends ComponentPropsWithRef<"nav"> {}

const NavbarLinkItem = () => {
	return <div></div>;
};

const Navbar: FC<NavbarProps> = (props) => {
	const { className, style, ...rest } = props;
	return (
		<nav className={`${styles.navbar} ${className}`} style={style}>
			<PageContainer className={`${styles.navbar_container}`}>
				<div className={`${styles.navbar_logo}`}>
					<Link href="/">
						<LOGO className="logo_svg" />
					</Link>
				</div>
				<ul className={`${styles.navbar_links}`}></ul>
			</PageContainer>
		</nav>
	);
};

export default Navbar;

