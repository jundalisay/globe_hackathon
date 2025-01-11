import { redirect } from '@sveltejs/kit';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import  from './schema';
import { orgformSchema } from '$lib/schemas/orgschema';


export const load: PageServerData = async ({ params, locals }) => {

	// get id that was passed 
	const { id } = params;
	const { user } = await locals.safeGetSession();

	console.log('ID: ' + id);

	const { data } = await locals.supabase.from('orgs').select('*').eq('id', id).single();    

	console.log('Page Server Ts org edit: ', data);
	
	return {form: await superValidate(zod(orgformSchema)),data};
};
