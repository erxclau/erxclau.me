interface Work {
	link: string;
	name: string;
	description?: string;
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

type Category = {
	category: string;
	lists:
		| Array<DatedList>
		| [CurrentList, ...Array<DatedList>, BeforeList]
		| [CurrentList, ...Array<DatedList>]
		| [...Array<DatedList>, BeforeList];
};
