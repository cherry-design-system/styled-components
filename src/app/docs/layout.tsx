import { Container, MaxWidth } from "@/app/components/cherry";
import { Sidebar } from "@/app/components/sidebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container $fluid>
			<Sidebar />
			<MaxWidth $size={800}>{children}</MaxWidth>
		</Container>
	);
}
