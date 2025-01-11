import { redirect } from '@sveltejs/kit';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { message, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { itemformSchema, type ItemFormSchema } from '$lib/schemas/item';


export const load: PageServerLoad = async ({ locals }) => {

	return {form: await superValidate(zod(itemformSchema)),};

	console.log('Page server ts: loading..');

};



// export const actions: Actions = {
export const actions = {	
	default: async (event) => {

		const { safeGetSession, supabase } = event.locals;
		const { session } = await safeGetSession();
		if (!session) {
			redirect(303, '/login');
		}
		const { user } = await event.locals.safeGetSession();

		// compare form to schema as validation
		const form = await superValidate(event, zod(itemformSchema));
		if (!form.valid) {return fail(400, {form,});}

		// parse data into vars 
		const { name, description, points, city, photo } = form.data;

		// const insert = supabaseServiceRole.from('items').insert({
		const { data, error } =  await supabase.from('items').insert({			
			user_id: user.id,
			name, description, points, city, photo, 
			created_at: new Date(),
		});

		if (error) {
			console.error('Error updating profile:', error.message);
			return setError(form, '', 'Could not update info. Please try again.');
		}

		return redirect(303, '/items');

	},
};
