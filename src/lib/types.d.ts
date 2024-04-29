export type Image = {
	default: {
		sources: [unknown];
		img: [unknown];
	};
};

export type Work = {
	link: string;
	name: string;
	description: string;
	media:
		| {
				type: 'image';
				source: Image;
				alt: string;
		  }
		| {
				type: 'url';
				source: string;
				alt: string;
		  }
		| {
				type: 'video';
				source: string;
		  };
	lazy?: boolean;
};
