import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import type { PageServerData } from "./$types";


export const load: PageServerData = async ({ params, locals }) => {

  const { id } = params;
  const { user } = await locals.safeGetSession();

  console.log('ID: ' + id);
   
  const { data: profile, error } = await locals.supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();

  const { data: items } = await locals.supabase
    .from('items')  
    .select('*')
    .eq('user_id', id);

	console.log('Page Server Ts Profile: ', profile);

  console.log('Page Server Ts Items: ', items );

    if (error) {
      console.error('Error fetching profile:', error);
      // Handle error
    } else {
		return { profile, items };
    }
}
