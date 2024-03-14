"use client";
import Link from "next/link";
import { Highlight } from "react-instantsearch";

export const Hit = ({ hit }: any) => {
	return (
		<article>
			<Link href={hit.url}>{hit.title}</Link>
			<Highlight attribute="title" hit={hit} />
		</article>
	);
};
