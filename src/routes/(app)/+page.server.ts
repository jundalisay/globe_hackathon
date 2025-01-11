import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';


// export const load: ServerLoad = async () => {
export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.safeGetSession();


	const { data } = await locals.supabase.from('profiles').select('*');

  return { data };

};



export const actions: Actions = {
	default: async (event) => {

		const { user } = await event.locals.safeGetSession();

		const supabaseServiceRole = event.locals.supabaseServiceRole;
		
	},
};

