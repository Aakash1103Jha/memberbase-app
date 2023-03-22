export enum BROWSER {
	CHROME = "Chrome",
	FIREFOX = "Firefox",
	SAFARI = "Safari",
	EDGE = "Edge",
	OPERA = "Opera",
	UNKNOWN = "",
}

export type Location = {
	host: string;
	origin: string;
	pathname: string;
};

export type Browser = {
	platform: string;
	lang: string;
	name: string;
};

export interface AnalyticsPayload {
	browser: Browser;
	location: Location;
}

const identifyBrowser = (agent: string) => {
	if ((agent.indexOf(BROWSER.OPERA) || agent.indexOf("OPR")) !== -1) {
		return BROWSER.OPERA;
	}
	if (agent.indexOf(BROWSER.EDGE) !== -1) {
		return BROWSER.EDGE;
	}
	if (agent.indexOf(BROWSER.CHROME) !== -1) {
		return BROWSER.CHROME;
	}
	if (agent.indexOf(BROWSER.SAFARI) !== -1) {
		return BROWSER.SAFARI;
	}
	if (agent.indexOf(BROWSER.FIREFOX) !== -1) {
		return BROWSER.FIREFOX;
	}
	return BROWSER.UNKNOWN;
};

export const sendAnalytics = async () => {
	if (process.env.NODE_ENV !== "production") return;
	const { platform, language, userAgent } = window.navigator;
	const { host, origin, pathname } = window.location;
	const _payload = {
		browser: {
			lang: language,
			platform,
			name: identifyBrowser(userAgent),
		},
		location: {
			host,
			origin,
			pathname,
		},
	} satisfies AnalyticsPayload;

	const res = await fetch("https://analyic-tracing.vercel.app/api/analytics", {
		method: "POST",
		body: JSON.stringify(_payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!res.ok) return console.error(await res.json());
};

