"use client";
import algoliasearch from "algoliasearch/lite";
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
			future={{ preserveSharedStateOnUnmount: true }}
		>
			<Configure hitsPerPage={5} />
			<SearchBox />
			<Hits hitComponent={Hit} />
		</InstantSearch>
	);
};
