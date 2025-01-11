import { redirect } from '@sveltejs/kit';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
// import { itemformSchema } from '$lib/schemas/item';
import { itemformSchema, type ItemFormSchema } from './schema';


export const load: PageServerLoad = async ({ locals }) => {

	return {form: await superValidate(zod(itemformSchema)),};

	console.log('Page server ts: loading..');

};



export const actions: Actions = {
	default: async (event) => {

		console.log('1. Loading Items New Server..');

		const { user } = await event.locals.safeGetSession();

		console.log('2: Service Role..');

		const supabaseServiceRole = event.locals.supabaseServiceRole;
		
		console.log('3. supabaseServiceRole:');

		const form = await superValidate(event, zod(itemformSchema));
		if (!form.valid) {return fail(400, {form,});}

		console.log('4. Form:');

		const { name, description, location, photo } = form.data;
		// points,
		console.log('5. Data:', form.data);

		const insert = supabaseServiceRole.from('items').insert({
			user_id: user.id,
			name, description, location, photo, 
			created_at: new Date(),
		});

		let error: PostgrestError | null = null;
		
		try {
			[/*result,*/ { error }] = await Promise.all([/*send, */ insert ]);
		} catch (e) {
			console.warn("Couldn't insert.", e);
			if (!error) {console.info(`Success!`,);}
		}
		return redirect(303, '/items');

// const { data, error } = await supabase
//   .from('items')
//   .insert([
//     { some_column: 'someValue', other_column: 'otherValue' },
//   ])
//   .select()

		// if (error) {
		// 	console.error('006 error:', error);
		// 	return setError(form, '', 'Error.');
		// }
		// console.log('007 user_id:', user.id);
		// redirect(303, '/items');	

		// let error: PostgrestError | null = null;	
		// try {
		// 	[/*result,*/ { error }] = await Promise.all([/*send, */ insert]);
		// } catch (e) {
		// 	console.warn("Couldn't post.", e);
		// 	if (!error) {console.info(`Success!`,);}
		// }
		// // return message(form);
		// return redirect(303, '/orgs');
	},
};
