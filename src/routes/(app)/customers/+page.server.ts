import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';


export const load: PageServerData = async ({ locals, url }) => {
	const { user } = await locals.safeGetSession();

	const q = String(url.searchParams.get('q')).trim();
	const { data } = await locals.supabase.from('items').select('*');

	return { items: data, q };

	console.log('Page Server Ts items index: ', data);
};



export const actions: Actions = {default: async (event) => {
	console.log('001');

}};

