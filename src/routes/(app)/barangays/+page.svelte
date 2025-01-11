<script lang="ts">
  import type { PageServerData } from './$types';
  import OrgCard from '$lib/components/ui/card/org.svelte';
  import { goto } from '$app/navigation';
  // import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import Button from '$lib/components/ui/button/button.svelte';
  import Cross from '~icons/lucide/cross';


  // expose session data?
  export let data;
  // export let user;
  // : PageServerData;
  // export let q: string = "";

  let error = '';
  let sortOption = '';

  console.log('Page Svelte Orgs Index: ', data.data);
  console.log('Page Svelte Orgs Index USER ID: ', data.user.id);

  // Function to sort items based on selected option
  const sortItems = () => {
    if (sortOption === 'titleAsc') {
      data.items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'titleDesc') {
      data.items.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  // Function to handle dropdown change
  const handleSortChange = (event) => {
    sortOption = event.target.value;
    sortItems();
  };

</script>


<svelte:head>
  <title>Orgs</title>
</svelte:head>


<!-- bind:value={sortOption} -->
<div class="px-4">

  <div class="flex items-center justify-between p-4">
    <h1 class="text-2xl font-bold">Orgs</h1>
    <Button on:click={()=> goto('/orgs/new')} class="flex flex-nowrap items-center gap-2">
      <Cross class="h-4 w-4" /> Add
    </Button>
    <!-- <button class="btn btn-primary" on:click={() => editItem(null)}>New</button> -->
    <!-- <button class="btn btn-secondary" on:click={() => editItem(selectedItem)}>Edit</button> -->
  </div>


  <div class="mx-auto px-5 grid justify-items-between mb-6">
    <form>
        <div class="flex">
          <select bind:value={sortOption} on:change={handleSortChange} class="border border-gray-300 p-2 rounded">
            <option value="titleAsc">Sort by Title: A-Z</option>
            <option value="titleDesc">Sort by Title: Z-A</option>
          </select>      

          <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for Organizations" required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
          </div>
      </div>
    </form>
  </div>


  <!-- on:add-to-cart={handleAddToCart}  -->
<!-- filteredProducts() -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#if data.data}
      {#each data.data as item}
        <OrgCard {item} user_id={data.user.id} />
      {/each}
    {:else}
    {/if}
  </div>


<!-- <AlertDialogPrimitive.Action
  class={cn(buttonVariants(), className)}
  {...$$restProps}
  on:click
  on:keydown
  let:builder
>
  <slot {builder} />
</AlertDialogPrimitive.Action>


  <AlertDialog bind:this={dialog} class="modal">
    <form on:submit|preventDefault={handleSubmit} class="modal-box">
      <h2 class="text-lg font-bold mb-4">Edit Org</h2>
      <label for="name" class="block mb-2">Name:</label>
      <input type="text" id="name" name="name" bind:value={selectedItem?.name} class="input input-bordered w-full mb-4" required />

      <div class="modal-action">
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn" on:click={() => dialog.close()}>Cancel</button>
      </div>
    </form>
  </dialog> -->
</div>


