import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';


export const load: PageServerData = async ({ locals, url }) => {
	const { user } = await locals.safeGetSession();

	const { data: transactions } = await locals.supabase.from('transactions').select('*');
	const { data: users } = await locals.supabase.from('profiles').select('*');

	console.log('Page Server Ts Points Index: ', transactions);

	return { transactions, users };
};
