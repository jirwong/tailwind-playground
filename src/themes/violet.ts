import type { Theme } from "./types";

export const violet: Theme = {
	name: "Violet",
	card: "bg-violet-100 text-violet-950",
	badge: "bg-violet-500 text-white",
	accent: "bg-violet-700 text-white",
	colors: [
		{ label: "Card bg", bg: "bg-violet-100", text: "text-violet-950" },
		{ label: "Card text", bg: "bg-violet-950", text: "text-white" },
		{ label: "Badge bg", bg: "bg-violet-500", text: "text-white" },
		{ label: "Badge text", bg: "bg-white", text: "text-violet-950" },
		{ label: "Accent bg", bg: "bg-violet-700", text: "text-white" },
	],
};
