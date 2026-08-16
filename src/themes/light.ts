import type { Theme } from "./types";

export const light: Theme = {
	name: "Light",
	card: "bg-white text-slate-900",
	badge: "bg-slate-100 text-slate-600",
	accent: "bg-slate-900 text-white",
	colors: [
		{ label: "Card bg", bg: "bg-white", text: "text-slate-900" },
		{ label: "Card text", bg: "bg-slate-900", text: "text-white" },
		{ label: "Badge bg", bg: "bg-slate-100", text: "text-slate-600" },
		{ label: "Badge text", bg: "bg-slate-600", text: "text-white" },
		{ label: "Accent bg", bg: "bg-slate-900", text: "text-white" },
	],
};
