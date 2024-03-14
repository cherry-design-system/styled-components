import React from "react";
import { Metadata } from "next";
import { OG_IMAGE, PAGE_DESCRIPTION } from "@/app/utils/constants";
import { Home as HomePage } from "@/app/components/pages/home";

export const metadata: Metadata = {
	title: "Cherry Design System",
	description: PAGE_DESCRIPTION,
	openGraph: {
		title: "Cherry v0.1.0",
		description: PAGE_DESCRIPTION,
		type: "website",
		url: "https://cherry.design",
		images: OG_IMAGE,
	},
};

export default function Home() {
	return <HomePage />;
}
