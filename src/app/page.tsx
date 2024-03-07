import React from "react";
import type { Metadata } from "next";
import { StyledSample } from "./sample";

export const metadata: Metadata = {
	title: "Cherry",
	description: "Design System",
};

export default function Home() {
	return (
		<main>
			<StyledSample>Hello Cherry</StyledSample>
		</main>
	);
}
