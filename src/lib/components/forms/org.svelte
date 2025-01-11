<script lang="ts">
	import * as Card from '$lib/components/ui/card';	
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import {superForm, type Infer, type SuperValidated, } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { orgformSchema, type OrgFormSchema } from '$lib/schemas/org';

	export let data: SuperValidated<Infer<OrgFormSchema>>;
	
	const form = superForm(data, {validators: zodClient(orgformSchema),});

	const { form: formData, enhance, submitting, tainted, message } = form;


	console.log('Page Svelte Orgs Form: ');
</script>


<Card.Root>
	<form method="POST" use:enhance>
		{#if $message?.success}
			<p class="text-sm text-green-700">{$message.success}</p>
		{:else}
			<Form.Errors {form} />

<!-- 		<Card.Header>
			<Card.Description>
				Enter the details of your item.
			</Card.Description>
		</Card.Header> -->

		<Card.Content class="pt-4">

			<Form.Field {form} name="name">
				<Form.Control let:attrs>
					<Form.Label>Name</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="Name of Org"
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
						placeholder="Describe your org"
						bind:value={$formData.description}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="address">
				<Form.Control let:attrs>
					<Form.Label>Address</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="Manila"
						bind:value={$formData.address}
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
						placeholder="0917 1234 567"
						bind:value={$formData.city}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>			

			<Form.Field {form} name="region">
				<Form.Control let:attrs>
					<Form.Label>Region</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="Region 1"
						bind:value={$formData.region}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="mobile">
				<Form.Control let:attrs>
					<Form.Label>Mobile</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="0917-45678"
						bind:value={$formData.mobile}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="phone">
				<Form.Control let:attrs>
					<Form.Label>Landline Phone</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="123-45678"
						bind:value={$formData.phone}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>			

			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input
						{...attrs}
						type="email"
						placeholder=""
						bind:value={$formData.email}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

		<Form.Field {form} name="logo">
			<Form.Control let:attrs>
				<Form.Label>Org Logo</Form.Label>				
				<Input				
					{...attrs}
					placeholder="URL for your logo"
					bind:value={$formData.logo}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>


			<Form.Field {form} name="url1">
				<Form.Control let:attrs>
					<Form.Label>Website</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="www.company.com"
						bind:value={$formData.url1}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="url2">
				<Form.Control let:attrs>
					<Form.Label>Facebook</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="facebook.com/company"
						bind:value={$formData.url2}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

		</Card.Content>
		
		<Card.Footer class="flex gap-2">

<!--     <button on:click={()=> console.log("asdfasd")}  type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Create Item
    </button>			 || !$tainted -->

			<Form.Button disabled={$submitting}>
				{#if $submitting}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					Updating info…
				{:else}
					Create Org
				{/if}
			</Form.Button>

			{#if $message?.success}
				<p class="text-xs text-green-700">{$message.success}</p>
			{:else}
				<span class="text-xs italic text-muted-foreground"> Unmodified </span>
			{/if}

		</Card.Footer>
	{/if}		
	</form>
	
</Card.Root>	