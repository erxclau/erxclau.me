import type { Picture } from 'vite-imagetools';

export interface Work {
	link: string;
	name: string;
	description?: string;
	media:
		| {
				type: 'image';
				source: { default: Picture };
				alt: string;
				eager?: boolean;
		  }
		| {
				type: 'url';
				source: string;
				alt: string;
				eager?: boolean;
		  };
}

interface Item {
	name: string;
	authors?: Array<string>;
	location?: string;
	year?: number;
	highlight?: boolean;
	thoughts?: string;
}

interface CurrentList {
	date: 'Current';
	items: Array<Item>;
}

interface DatedList {
	date: number;
	items: Array<Item>;
}

interface BeforeList {
	date: undefined;
	items: Array<Item>;
}

export type Category = {
	category: string;
	lists:
		| Array<DatedList>
		| [CurrentList, ...Array<DatedList>, BeforeList]
		| [CurrentList, ...Array<DatedList>]
		| [...Array<DatedList>, BeforeList];
};
