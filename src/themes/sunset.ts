import type { Theme } from "./types";

export const sunset: Theme = {
	name: "Sunset",
	card: "bg-orange-100 text-orange-900",
	badge: "bg-orange-500 text-white",
	accent: "bg-orange-600 text-white",
	colors: [
		{ label: "Card bg", bg: "bg-orange-100", text: "text-orange-900" },
		{ label: "Card text", bg: "bg-orange-900", text: "text-white" },
		{ label: "Badge bg", bg: "bg-orange-500", text: "text-white" },
		{ label: "Badge text", bg: "bg-white", text: "text-orange-900" },
		{ label: "Accent bg", bg: "bg-orange-600", text: "text-white" },
	],
};
