import { Container } from "@/app/components/cherry";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Container>{children}</Container>;
}
