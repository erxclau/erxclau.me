import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ cookies }) => {
	if (cookies.get('session') === 'admin') {
		redirect(307, '/lists');
	}

	return null;
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		if (cookies.get('session') === 'admin') {
			redirect(307, '/lists');
		}

		const data = await request.formData();
		const password = data.get('password');

		if (!password) {
			return fail(400, { error: true });
		}

		if (password === env.ADMIN_PASSWORD) {
			cookies.set('session', 'admin', { path: '/', maxAge: 60 * 60 * 24 * 7 });
			redirect(303, '/lists');
		}

		return fail(400, { error: true });
	}
};
