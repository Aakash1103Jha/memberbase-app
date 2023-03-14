import type { AppProps } from "next/app";

import "@/styles/globals.css";

import { AnnouncementBanner, Footer, Navbar } from "@/components";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	const showAnnouncement = true;
	return (
		<>
			<Head>
				<meta name="title" content="Memberbase" />
				<meta
					name="description"
					content="The best resources and books from around the web, collected and curated for your reading."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://metatags.io/" />
				<meta property="og:title" content="Memberbase" />
				<meta
					property="og:description"
					content="The best resources and books from around the web, collected and curated for your reading."
				/>
				<meta property="og:image" content="/public/memberbase.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://metatags.io/" />
				<meta property="twitter:title" content="Memberbase" />
				<meta
					property="twitter:description"
					content="The best resources and books from around the web, collected and curated for your reading."
				/>
				<meta property="twitter:image" content="/public/memberbase.png" />
			</Head>
			{showAnnouncement ? <AnnouncementBanner bannerText="A Webflow membership template for resource websites." /> : null}
			<Navbar />
			<div className="min_height_wrapper">
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	);
}

