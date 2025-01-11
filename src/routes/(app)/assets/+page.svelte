<script lang="ts">
  import type { PageServerData } from './$types';
  import ItemCard from '$lib/components/ui/card/item.svelte';
  import { goto } from '$app/navigation';

  import Button from '$lib/components/ui/button/button.svelte';
  import Cross from '~icons/lucide/cross';

  // expose session data?
  export let data: PageServerData;
  export let q: string = "";
  export let id;

  let error = '';
  let sortOption = '';

  console.log('Page Svelte Items: ', data.items);

  const go = (id) => {
    goto(`/items/${id}`);
  };
</script>


<svelte:head>
  <title>Items</title>
</svelte:head>

<!-- bind:value=sortOption on:change={handleSortChange}-->
<div class="px-4">

  <div class="flex items-center justify-between p-4">
    <h1 class="text-2xl font-bold">Items</h1>

    <Button on:click={()=> goto('/items/new')} class="flex flex-nowrap items-center gap-2">
      <Cross class="h-4 w-4" /> Add
    </Button>
  </div>


  <div class="mx-auto px-5 grid justify-items-between mb-6">
    <form>
        <div class="flex">
          <select bind:value={sortOption}  class="border border-gray-300 p-2 rounded">
            <option value="titleAsc">Sort by Name: A-Z</option>
            <option value="titleDesc">Sort by Name: Z-A</option>
            <option value="priceAsc">Sort by Price: Ascending</option>
            <option value="priceDesc">Sort by Price: Descending</option>            
          </select>

          <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for Items" required />
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
    {#if data.items}
      {#each data.items as item}
        <div >
          <ItemCard {item} on:click={()=> go(item.id)} />          
        </div>

      {/each}
    {:else}
    {/if}
  </div>

</div>

