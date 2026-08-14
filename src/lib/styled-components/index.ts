// `./registry` is deliberately absent: it imports `useServerInsertedHTML` from
// `next/navigation`, and re-exporting it here forced every consumer to resolve
// Next just to import a Button. It ships from the `cherry-styled-components/next`
// subpath instead (see the `exports` map and the second lib entry in
// vite.config.js), so only Next apps that ask for it ever pull Next in.
export * from "./client-theme-provider";
export * from "./theme-init";
export * from "./theme-provider";
