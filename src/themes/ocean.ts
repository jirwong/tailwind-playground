import type { Theme } from "./types";

export const ocean: Theme = {
	name: "Ocean",
	card: "bg-sky-50 text-sky-950",
	badge: "bg-sky-500 text-white",
	accent: "bg-sky-600 text-white",
	colors: [
		{ label: "Card bg", bg: "bg-sky-50", text: "text-sky-950" },
		{ label: "Card text", bg: "bg-sky-950", text: "text-white" },
		{ label: "Badge bg", bg: "bg-sky-500", text: "text-white" },
		{ label: "Badge text", bg: "bg-white", text: "text-sky-950" },
		{ label: "Accent bg", bg: "bg-sky-600", text: "text-white" },
	],
};
