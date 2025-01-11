<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import {superForm, type Infer, type SuperValidated, } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import { itemformSchema, type ItemFormSchema } from './schema';
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

<!-- min="1" -->
<!-- 			<Form.Field {form} name="points">
				<Form.Control let:attrs>
					<Form.Label>Points</Form.Label>
					<Input
						{...attrs}
						required
						type="number"
						min="0.1"
						bind:value={$formData.points}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field> -->

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


<!-- 
<form method="POST" use:enhance class="grid gap-4">
	{#if $message?.success}
		<p class="text-sm text-green-700">{$message.success}</p>
	{:else}
		<Form.Errors {form} />

		<Form.Field {form} name="content">
			<Form.Control let:attrs>
				<Textarea
					rows={10}
					{...attrs}
					placeholder="Write a post"
					bind:value={$formData.content}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button class="w-full" disabled={$submitting}>
			{#if $submitting}
				<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				Posting...
			{:else}
				Post
			{/if}
		</Form.Button>
	{/if}
</form>

 -->