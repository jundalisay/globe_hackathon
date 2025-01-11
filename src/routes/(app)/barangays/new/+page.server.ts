import { redirect } from '@sveltejs/kit';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
//import { orgformSchema } from '$lib/schemas/org';
import { orgformSchema, type OrgFormSchema } from './schema';


export const load: PageServerLoad = async ({ locals }) => {

	return {form: await superValidate(zod(orgformSchema)),};

};


export const actions: Actions = {
	default: async (event) => {

		console.log('1: Starting Action..');

		const { user } = await event.locals.safeGetSession();

		console.log('2: Service Role..');

		const supabaseServiceRole = event.locals.supabaseServiceRole;
		
		console.log('3: form..');

		const form = await superValidate(event, zod(orgformSchema));
		if (!form.valid) {return fail(400, {form,});}

		console.log('4: form data..');

		const { name, description, address, city, region, mobile, phone, logo, url1, url2 } = form.data;

		console.log('5: Content:', form.data);

		const thingtobeinserted = supabaseServiceRole.from('orgs').insert({
			owner_id: user.id,
			user_id: user.id,
			name, description, address, city, region, mobile, phone, logo, url1, url2,
			created_at: new Date(),
		});

		let error: PostgrestError | null = null;
		
		try {
			[/*result,*/ { error }] = await Promise.all([/*send, */ thingtobeinserted]);
		} catch (e) {
			console.warn("Couldn't insert.", e);
			if (!error) {console.info(`Success!`,);}
		}
		return redirect(303, '/orgs');		
		// if (error) {
		// 	console.error(error);
		// 	return setError(form, '', 'Could not sign up. Please try again.');
		// }
		// redirect('/orgs');

	},
};
