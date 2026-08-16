import type { Theme } from "./types";

export const amber: Theme = {
	name: "Amber",
	card: "bg-amber-100 text-amber-950",
	badge: "bg-amber-600 text-white",
	accent: "bg-amber-700 text-white",
	colors: [
		{ label: "Card bg", bg: "bg-amber-100", text: "text-amber-950" },
		{ label: "Card text", bg: "bg-amber-950", text: "text-white" },
		{ label: "Badge bg", bg: "bg-amber-600", text: "text-white" },
		{ label: "Badge text", bg: "bg-white", text: "text-amber-950" },
		{ label: "Accent bg", bg: "bg-amber-700", text: "text-white" },
	],
};
