import type { AppProps } from "next/app";

import "@/styles/globals.css";

import { AnnouncementBanner, Footer, Navbar } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
	const showAnnouncement = true;
	return (
		<>
			{showAnnouncement ? <AnnouncementBanner bannerText="A Webflow membership template for resource websites." /> : null}
			<Navbar />
			<div className="min_height_wrapper">
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	);
}

