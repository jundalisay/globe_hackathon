import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';


export const load: PageServerData = async ({ locals, url }) => {
	const { user } = await locals.safeGetSession();

	const { data } = await locals.supabase.from('transactions').select('*');

	console.log('Page Server Ts transactions: ', data);

	// console.log('Searched is: ', searched);	

	return { transactions: data };
};
