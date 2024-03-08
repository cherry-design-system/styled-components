import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/styled-components/registry";
import ThemeProvider from "@/lib/styled-components/theme-provider";
import Header from "@/app/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<ThemeProvider>
						<Header />
						{children}
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
