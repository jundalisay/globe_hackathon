export const ssr = false;

import { fail, redirect, type Actions } from '@sveltejs/kit';

import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types.js';
import { formSchema } from './schema';


// GETS SCHEMA
export const load: PageServerLoad = async ({ url }) => {
	const next = url.searchParams.get('next');
	const isCheckout = Boolean(typeof next === 'string' && decodeURIComponent(next).match(/^\/checkout\/.+$/),);

	return {
		isCheckout,
		form: await superValidate(zod(formSchema)),
	};
};


export const actions: Actions = {
	default: async (event) => {
		const supabase = event.locals.supabase;
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {form,});
		}

		const {email, password, phone} = form.data;

		// const { error } = await supabase.from('profiles').upsert({
		// 	id: user.id,
		// 	name,
		// 	updated_at: new Date(),
		// });


		const { error } = await supabase.auth.signUp({email, password, phone});


		// const { error } = await supabase.auth.signUp({
		// 	email, password, 
		// 	options: {data: phone}
		// });


		if (error) {
			console.error(error);
			return setError(form, '', error.code);
		}

		// console.log(...form);

		// console.log("form is:" + form);

		// console.log("form.data is:" + form.data.val);

		console.log("form.data is:" + form.data);

		const search = new URLSearchParams(event.url.search);
		// search.set('next', event.url.searchParams.get('next') || '/dashboard');
		search.set('next', event.url.searchParams.get('next') || '/');

		redirect(303, '/auth/callback?' + search.toString());


	},
};
