import type { Theme } from "./types";

export const midnight: Theme = {
	name: "Midnight",
	card: "bg-indigo-950 text-indigo-100",
	badge: "bg-indigo-800 text-indigo-200",
	accent: "bg-indigo-400 text-indigo-950",
	colors: [
		{ label: "Card bg", bg: "bg-indigo-950", text: "text-white" },
		{ label: "Card text", bg: "bg-indigo-100", text: "text-indigo-950" },
		{ label: "Badge bg", bg: "bg-indigo-800", text: "text-white" },
		{ label: "Badge text", bg: "bg-indigo-200", text: "text-indigo-950" },
		{ label: "Accent bg", bg: "bg-indigo-400", text: "text-indigo-950" },
	],
};
