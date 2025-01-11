<script lang="ts">
  import type { PageServerData } from './$types';
  import type { PostgrestError } from '@supabase/supabase-js';
  import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
  import type { PageServerData } from "./$types";


  // expose session data?
  export let data: PageServerData;
  export let transactions;

  let sortOption = 'dateAsc'; // Default sort option
  let error = '';

  // Function to sort transactions based on selected option
  const sortTransactions = () => {
    if (sortOption === 'dateAsc') {
      transactions.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if (sortOption === 'dateDesc') {
      transactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortOption === 'valueAsc') {
      transactions.sort((a, b) => a.total_price - b.total_price);
    } else if (sortOption === 'valueDesc') {
      transactions.sort((a, b) => b.total_price - a.total_price);
    }
  };

  // Handle dropdown change
  const handleSortChange = (event) => {
    sortOption = event.target.value;
    sortTransactions();
  };

</script>


<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Transactions List</h1>

    <div class="mb-4">
      <select id="sort" bind:value={sortOption} on:change={handleSortChange} class="border border-gray-300 rounded p-2">
        <option value="dateAsc">Sort by Date: Oldest to Newest</option>
        <option value="dateDesc">Sort by Date: Newest to Oldest</option>
        <option value="valueAsc">Sort by Value: Low to High</option>
        <option value="valueDesc">Sort by Value: High to Low</option>
      </select>
    </div>

  <div class="space-y-4">
    {#each data.transactions as transaction}
      <div class="bg-white border rounded-lg shadow-md p-4 flex flex-col md:flex-row">
        <div class="flex-1 flex justify-between mb-4 md:mb-0">
          <div class="bg-gray-100 border rounded-lg shadow-md p-4 flex-1 mr-2">
            <div class="flex items-center justify-between mb-2">
              <img src={transaction.buyer_avatar} alt="Buyer Avatar" class="w-16 h-16 rounded-full mr-4" />
              <div>
                <h2 class="text-lg font-bold">{transaction.buyer_name}</h2>
                <p class="text-gray-600">Buyer</p>
              </div>
              <div>
                <h3 class="text-md font-semibold">Item: {transaction.item_name}</h3>
                <p class="text-gray-900 font-semibold">Value: ${transaction.total_price}</p>
                <p class="text-gray-600">Type: {transaction.transaction_type}</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 border rounded-lg shadow-md p-4 flex-1 ml-2">
            <div class="flex items-center justify-between mb-2">
              <img src={transaction.seller_avatar} alt="Seller Avatar" class="w-16 h-16 rounded-full mr-4" />
              <div>
                <h2 class="text-lg font-bold">{transaction.seller_name}</h2>
                <p class="text-gray-600">Seller</p>
              </div>
              <div>
                <h3 class="text-md font-semibold">Item: {transaction.item_name}</h3>
                <p class="text-gray-900 font-semibold">Value: ${transaction.total_price}</p>
                <p class="text-gray-600">Type: {transaction.transaction_type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>