import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import type { PageServerData } from "./$types";


// import { message, superValidate } from 'sveltekit-superforms';
// import { zod } from 'sveltekit-superforms/adapters';
// import { formSchema } from './schema';

export const load: PageServerData = async ({ params, locals }) => {

	const { id } = params;
	const { user } = await locals.safeGetSession();

	console.log('ID: ' + id);

	// let item;

	// const { data, error } = await locals.supabase.from('items').select('*').eq('id', id).single();
    // if (error) {return { status: 404, error: new Error('Item not found') };}

	const { data } = await locals.supabase.from('items').select('*').eq('id', id).single();    

	console.log('Page Server Ts item show: ', data);
	
	return { item: data };

	// console.log('Product user: ' + data.user_id);	
	// console.log('User: ' + user.email);	

    // return { item: { name: data.name, id: data.id } } // Return the fetched item as props

	// item = data;

	// console.log('Page.Server.Ts: ' + data.name);

	// return { item: { name: data.name }};
};



export const actions: Actions = {
	default: async (event) => {

		console.log('1. Loading Items New Server..');

		const { user } = await event.locals.safeGetSession();

		console.log('2: Service Role..');

		const supabaseServiceRole = event.locals.supabaseServiceRole;
		
		console.log('3. supabaseServiceRole:');

		const form = await superValidate(event, zod(itemformSchema));
		if (!form.valid) {return fail(400, {form,});}

		console.log('4. Form:');

		const { name, description, location, photo } = form.data;
		// points,
		console.log('5. Data:', form.data);

		const insert = supabaseServiceRole.from('items').insert({
			user_id: user.id,
			name, description, location, photo, 
			created_at: new Date(),
		});

		let error: PostgrestError | null = null;
		
		try {
			[/*result,*/ { error }] = await Promise.all([/*send, */ insert ]);
		} catch (e) {
			console.warn("Couldn't insert.", e);
			if (!error) {console.info(`Success!`,);}
		}
		return redirect(303, '/items');
	},
};

// export const actions: Actions = {default: async (event) => {


// export const actions = {
// 	handleSubmit: async (event) => {
// 		const { safeGetSession, supabase } = event.locals;
// 		console.log('001');
// 	}
// };

  // const  = async () => {
  //   const qty = $quantity;

  //   if (qty <= 0) {
  //     $errorMessage = 'Please enter a valid quantity greater than 0.';
  //     return;
  //   }

  //   const { data, error } = await supabase
  //     .from('transactions')
  //     .insert([{ quantity: qty }]);

  //   if (error) {
  //     $errorMessage = 'Error creating transaction: ' + error.message;
  //   } else {
  //     $successMessage = `Transaction created with quantity: ${qty}`;
  //     $quantity = 0; // Reset the input field after submission
  //   }
  // };