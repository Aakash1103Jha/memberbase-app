import { type FC, ComponentPropsWithRef } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

import styles from "./navbar.module.css";

import { Route } from "@/types/Route";
import LOGO from "@/assets/svg/memberbase.svg";

import { PageContainer } from "../Container/PageContainer";
import { Button } from "../Button";

export interface NavbarProps extends ComponentPropsWithRef<"nav"> {
	config: Route[];
}

const NavbarLinkItem = ({ label, url }: Route) => {
	return (
		<Link className={`${styles.navbar_link_item}`} href={url} passHref>
			<p>{label}</p>
		</Link>
	);
};

const Navbar: FC<NavbarProps> = (props) => {
	const { status } = useSession();
	const { className, config, style, ...rest } = props;
	return (
		<nav className={`${styles.navbar} ${className}`} style={style}>
			<PageContainer className={`${styles.navbar_container}`}>
				<div className={`${styles.navbar_logo}`}>
					<Link href="/">
						<LOGO className="logo_svg" />
					</Link>
				</div>
				<ul className={`${styles.navbar_links}`}>
					{config
						.filter((item) => item.isPublic === true || (item.isPublic === false && status === "authenticated"))
						.map((item) => (
							<li className={`${styles.navbar_link}`} key={item.label}>
								<NavbarLinkItem {...item} />
							</li>
						))}
					{status === "authenticated" ? (
						<li>
							<Button
								// style={{ background: "#d91e18" }}
								btnStyle="outline"
								label="Logout"
								onClick={async () => await signOut({ callbackUrl: "/", redirect: false })}
							/>
						</li>
					) : null}
				</ul>
			</PageContainer>
		</nav>
	);
};

export default Navbar;

