// The site copy from src/content/copy.yaml. Pages import it from here.
import { getEntry } from 'astro:content';

export const copy = (await getEntry('copy', 'copy'))!.data;

// Puts values into the {name} slots of a copy string.
export const fill = (text: string, vars: Record<string, string | number>) =>
	text.replace(/\{(\w+)\}/g, (slot, key) => (key in vars ? String(vars[key]) : slot));
