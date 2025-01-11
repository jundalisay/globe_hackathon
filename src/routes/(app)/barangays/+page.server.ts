import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type PageServerData, type Actions, type ServerLoad } from '@sveltejs/kit';


export const load: PageServerData = async ({ locals, url }) => {
	const { user } = await locals.safeGetSession();

	const { data } = await locals.supabase.from('orgs').select('*');


	return { data };
};



export const actions: Actions = {

  // let data = { data: [], user: { id: 'user-id' } }; // Replace with actual user data
  
	del: async (event) => {
		const { safeGetSession, supabase, supabaseServiceRole } = event.locals;

		const { session, user } = await safeGetSession();
		
	},

	editItem: async (item) => {
    selectedItem = item;
    dialog.showModal();
  }

	// handleSubmit(event) {
  //   const formData = new FormData(event.target);
  //   const updatedItem = {
  //     id: selectedItem.id,
  //     name: formData.get('name'),
  //     // Add other fields as necessary
  //   };

  //   const { error } = await supabase
  //     .from('orgs')
  //     .update(updatedItem)
  //     .eq('id', selectedItem.id);

  //   if (error) {
  //     console.error('Error updating item:', error);
  //   } else {
  //     // Refresh the data or update it in state
  //     data.data = data.data.map(org => (org.id === selectedItem.id ? updatedItem : org));
  //     dialog.close();
  //   }
  // }

};
