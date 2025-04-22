import type { PageServerLoad, Actions } from './$types';
import type { Category } from '$lib/types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies, platform }) => {
	const admin = cookies.get('session') === 'admin';

	const consumption = new Map<Category, Map<number | 'Current' | null, Array<string>>>();

	const response = await platform?.env.DB.prepare(
		'SELECT category, title, attribution, year, current FROM consumption ORDER BY cid ASC'
	).all<{
		category: Category;
		title: string;
		attribution: string | null;
		year: number | null;
		current: 1 | 0;
	}>();

	if (response === undefined || !response.success) {
		return { admin: admin, consumption: consumption };
	}

	for (const row of response.results) {
		if (!consumption.has(row.category)) {
			consumption.set(row.category, new Map());
		}

		const c = consumption.get(row.category);

		const item = row.attribution === null ? row.title : row.title + ' / ' + row.attribution;

		if (row.current && !c?.has('Current')) {
			c?.set('Current', [item]);
			continue;
		}

		if (row.current) {
			c?.get('Current')?.push(item);
			continue;
		}

		if (!c?.has(row.year)) {
			c?.set(row.year, [item]);
			continue;
		}

		c?.get(row.year)?.push(item);
	}

	return { admin: admin, consumption: consumption };
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		if (cookies.get('session') !== 'admin') {
			return fail(401)
		}


	}
};