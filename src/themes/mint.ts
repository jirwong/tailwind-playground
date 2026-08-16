import type { Theme } from "./types";

export const mint: Theme = {
	name: "Mint",
	card: "bg-emerald-100 text-emerald-900",
	badge: "bg-emerald-600 text-white",
	accent: "bg-emerald-700 text-white",
	colors: [
		{ label: "Card bg", bg: "bg-emerald-100", text: "text-emerald-900" },
		{ label: "Card text", bg: "bg-emerald-900", text: "text-white" },
		{ label: "Badge bg", bg: "bg-emerald-600", text: "text-white" },
		{ label: "Badge text", bg: "bg-white", text: "text-emerald-900" },
		{ label: "Accent bg", bg: "bg-emerald-700", text: "text-white" },
	],
};
