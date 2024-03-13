import { Highlight } from "react-instantsearch";
import { getPropertyByPath } from "instantsearch.js/es/lib/utils";

export const Hit = ({ hit }: any) => {
	return (
		<article>
			<hr />
			<div className="hit-title">
				<div>{hit.objectID}</div>
				<div>{hit.url}</div>
				<Highlight attribute="title" hit={hit} />
			</div>
			<hr />
		</article>
	);
};
