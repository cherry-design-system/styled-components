import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/styled-components/registry";
import ThemeProvider from "@/lib/styled-components/theme-provider";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { MinHeight } from "@/app/components/min-height";

const inter = Inter({ subsets: ["latin"] });

const FAVICON_VERSION = 1;

function v(href: string) {
	return `${href}?v=${FAVICON_VERSION}`;
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={v("/favicons/apple-touch-icon.png")}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={v("/favicons/favicon-32x32.png")}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={v("/favicons/favicon-16x16.png")}
				/>
				<link rel="manifest" href={v("/favicons/site.webmanifest")} />
				<link
					rel="mask-icon"
					href={v("/favicons/safari-pinned-tab.svg")}
					color="#ffffff"
				/>
				<link rel="shortcut icon" href={v("/favicons/favicon.ico")} />
				<meta name="apple-mobile-web-app-title" content="Cherry" />
				<meta name="application-name" content="Cherry" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<ThemeProvider>
						<MinHeight>
							<Header />
							{children}
						</MinHeight>
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
