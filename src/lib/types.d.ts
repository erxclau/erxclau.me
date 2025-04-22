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

export type Category =
	| 'Books'
	| 'Film'
	| 'Shows'
	| 'Documentaries'
	| 'Talks'
	| 'Papers'
	| 'Journalism'
	| 'Essays';