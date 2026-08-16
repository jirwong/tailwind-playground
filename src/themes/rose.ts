import type { Theme } from "./types";

export const rose: Theme = {
	name: "Rose",
	card: "bg-rose-50 text-rose-950",
	badge: "bg-rose-500 text-white",
	accent: "bg-rose-600 text-white",
	colors: [
		{ label: "Card bg", bg: "bg-rose-50", text: "text-rose-950" },
		{ label: "Card text", bg: "bg-rose-950", text: "text-white" },
		{ label: "Badge bg", bg: "bg-rose-500", text: "text-white" },
		{ label: "Badge text", bg: "bg-white", text: "text-rose-950" },
		{ label: "Accent bg", bg: "bg-rose-600", text: "text-white" },
	],
};
