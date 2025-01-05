import type { Picture } from 'vite-imagetools';

export type Work = {
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
};

type CurrentList = {
	date: 'Current';
	items: Array<string>;
};

type DatedList = {
	date: number;
	items: Array<string>;
};

type BeforeList = {
	date: undefined;
	items: Array<string>;
};

export type Category = {
	category: string;
	lists:
		| Array<DatedList>
		| [CurrentList, ...Array<DatedList>, BeforeList]
		| [CurrentList, ...Array<DatedList>]
		| [...Array<DatedList>, BeforeList];
};
