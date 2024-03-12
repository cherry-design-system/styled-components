import rehypeHighlight from "rehype-highlight";
import nextMdx from "@next/mdx";

const withMdx = nextMdx({
	extension: /\.mdx?$/,
	options: {
		rehypePlugins: [rehypeHighlight],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
	compiler: {
		styledComponents: true,
	},
	pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
});

export default nextConfig;
