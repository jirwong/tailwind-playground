import type { Theme } from "./types";

export const monokai: Theme = {
	name: "Monokai",
	card: "bg-neutral-800 text-stone-100",
	badge: "bg-rose-500 text-stone-100",
	accent: "bg-lime-500 text-neutral-800",
	colors: [
		{ label: "Card bg", bg: "bg-neutral-800", text: "text-stone-100" },
		{ label: "Card text", bg: "bg-stone-100", text: "text-neutral-800" },
		{ label: "Badge bg", bg: "bg-rose-500", text: "text-stone-100" },
		{ label: "Badge text", bg: "bg-stone-100", text: "text-neutral-800" },
		{ label: "Accent bg", bg: "bg-lime-500", text: "text-neutral-800" },
	],
};
