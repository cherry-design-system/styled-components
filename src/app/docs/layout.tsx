import { Container, MaxWidth } from "@/app/components/cherry";
import { Sidebar } from "@/app/components/sidebar";
import { Content } from "@/app/components/content";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container $fluid>
			<Sidebar />
			<MaxWidth $size={800}>
				<Content>{children}</Content>
			</MaxWidth>
		</Container>
	);
}
