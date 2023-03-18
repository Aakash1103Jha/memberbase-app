import { ReactNode, ComponentPropsWithRef } from "react";

interface GenericListProps<T> extends ComponentPropsWithRef<"div"> {
	element: (item: T) => ReactNode;
	keyExtractor: (item: T) => string;
	data: T[];
}

const GenericList = <T extends unknown>(props: GenericListProps<T>) => {
	const { element, keyExtractor, data, className, style, ...rest } = props;
	return (
		<div className={className} style={style} {...rest}>
			{data && data.map((node) => <div key={keyExtractor(node)}>{element(node)}</div>)}
		</div>
	);
};
export default GenericList;

