<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import {superForm, type Infer, type SuperValidated, } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import { itemformSchema, type ItemFormSchema } from '$lib/schemas/item';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: SuperValidated<Infer<ItemFormSchema>>;
	
	const form = superForm(data, {validators: zodClient(itemformSchema),});
	
	const { form: formData, enhance, submitting, message, tainted } = form;
</script>



<Card.Root>
	<SuperDebug data={form} />

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

			<Form.Field {form} name="points">
				<Form.Control let:attrs>
					<Form.Label>Points</Form.Label>
					<Input
						{...attrs}
						required
					    type="number"
					    id="decimalInput"
					    min="0"
					    step="0.1"
					    placeholder="0.0"
						bind:value={$formData.points}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="city">
				<Form.Control let:attrs>
					<Form.Label>City</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="Manila"
						bind:value={$formData.city}
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

	<button type="submit" class="btn btn-primary">Save</button>
	
	</form>
</Card.Root>
