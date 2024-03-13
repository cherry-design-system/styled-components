import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";

import { Hit } from "./Hit";

const searchClient = algoliasearch(
	"3DS9JSFDUQ",
	"2e3533e4512fc5f4b4938e876fa6dc1a",
);

export const Search = () => {
	return (
		<InstantSearch
			searchClient={searchClient}
			indexName="Cherry Documentation"
		>
			<Configure hitsPerPage={5} />
			<div className="ais-InstantSearch">
				<SearchBox />
				<Hits hitComponent={Hit} />
			</div>
		</InstantSearch>
	);
};
