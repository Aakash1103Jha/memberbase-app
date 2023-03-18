import { type FC, ComponentPropsWithRef } from "react";

import styles from "./announcementBanner.module.css";

export interface AnnouncementBannerProps extends ComponentPropsWithRef<"section"> {
	bannerText: string;
}

const AnnouncementBanner: FC<AnnouncementBannerProps> = (props) => {
	const { className, style, bannerText, ...rest } = props;
	return (
		<section className={`${styles.announcementBanner} ${className}`} style={style}>
			{bannerText}
		</section>
	);
};

export default AnnouncementBanner;

