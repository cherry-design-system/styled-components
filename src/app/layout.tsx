import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeProvider from "@/lib/theme-provider";

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
					<ThemeProvider>{children}</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
