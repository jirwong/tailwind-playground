import { amber } from "./amber";
import { dark } from "./dark";
import { light } from "./light";
import { midnight } from "./midnight";
import { mint } from "./mint";
import { monokai } from "./monokai";
import { ocean } from "./ocean";
import { rose } from "./rose";
import { slate } from "./slate";
import { sunset } from "./sunset";
import type { Theme } from "./types";
import { violet } from "./violet";

export const themes: Theme[] = [
	light,
	dark,
	sunset,
	mint,
	ocean,
	violet,
	rose,
	amber,
	midnight,
	slate,
	monokai,
];

export type { Theme, ThemeColor } from "./types";
