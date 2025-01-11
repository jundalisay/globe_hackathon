import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import type { PageServerData } from "./$types";

let transactionId;
let transactionDetails;

export const load: PageServerData = async ({ params, locals }) => {

	const { id } = params;
	const { user } = await locals.safeGetSession();
   
    const { data, error } = await locals.supabase
      .from('transactions')
      .select('*')
      .eq('id', id)
      .single();

	console.log('Data: ', data);

    if (error) {
      console.error('Error fetching transaction:', error);
      // Handle error
    } else {
		return { transaction: data };
    }
}