import React from "react";
import { Metadata } from "next";
import { Home as HomePage } from "@/app/components/pages/home";

export const metadata: Metadata = {
	title: "Cherry v0.1.0",
	description: "Design System",
	openGraph: {
		title: "Cherry  v0.1.0",
		description: "Design System",
		type: "website",
		url: "https://cherry.design",
		images: "https://cherry.design/favicons/og-preview.jpg",
	},
};

export default function Home() {
	return <HomePage />;
}
