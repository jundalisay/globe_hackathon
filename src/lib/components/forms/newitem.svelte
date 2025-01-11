<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import {superForm, type Infer, type SuperValidated, } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import { itemformSchema, type ItemFormSchema } from '$lib/schemas/item';

	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	export let data: SuperValidated<Infer<ItemFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(itemformSchema),
		resetForm: false,
	});

	const { form: formData, enhance, submitting, tainted, message } = form;

	console.log("Page Server Svelte: loaded...");
</script>



<Card.Root>
<!-- <SuperDebug action="?/items/new" data={form} /> -->

	<form method="POST" use:enhance>
		{#if $message?.success}
			<p class="text-sm text-green-700">{$message.success}</p>
		{:else}
			<Form.Errors {form} />


		<Card.Header>
			<Card.Description>
				Enter the details of your item.
			</Card.Description>
		</Card.Header>
		<Card.Content>

			<Form.Field {form} name="name">
				<Form.Control let:attrs>
					<Form.Label>Name</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="Banana"
						required
						bind:value={$formData.name}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="description">
				<Form.Control let:attrs>
					<Form.Label>Description</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="Describe your item"
						required
						bind:value={$formData.description}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>



			<Form.Field {form} name="location">
				<Form.Control let:attrs>
					<Form.Label>Location</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="Manila"
						bind:value={$formData.location}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>


			<Form.Field {form} name="photo">
				<Form.Control let:attrs>
					<Form.Label>Photo</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="URL of photo"
						bind:value={$formData.photo}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
												
		</Card.Content>
		
		<Card.Footer class="flex gap-2">


<!--     <button on:click={()=> console.log("asdfasd")}  type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Create Item
    </button>			 -->
			<Form.Button disabled={$submitting || !$tainted}>
				{#if $submitting}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					Creating...
				{:else}
					Create Item
				{/if}
			</Form.Button>
			{#if $message?.success}
				<p class="text-xs text-green-700">{$message.success}</p>
			{:else if !$tainted}
				<span class="text-xs italic text-muted-foreground"> Unmodified </span>
			{/if}
		</Card.Footer>
	{/if}		
	</form>
</Card.Root>


<!--     <div class="mb-4">
      <label class="block">Photo URLs</label>
      <small class="mb-4">The first URL will be the main photo</small>

      {#each Array(4) as _, index}
        <input
          type="text"
          placeholder={`Photo URL ${index + 1}`}
          bind:value={photoUrls[index]}
          class="border border-gray-300 rounded p-2 w-full mb-2"/>
      {/each}
    </div> -->
