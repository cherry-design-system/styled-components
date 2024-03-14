import { Container, MaxWidth } from "@/app/components/cherry";
import { Sidebar } from "@/app/components/sidebar";
import { Content } from "@/app/components/content";
import { DocsFooter } from "@/app/components/footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container $fluid>
			<Sidebar />
			<MaxWidth $size={600}>
				<Content>{children}</Content>
				<DocsFooter />
			</MaxWidth>
		</Container>
	);
}
