<script lang="ts">

</script>

<!-- <div class="p-4">
  <h1 class="text-2xl font-bold mb-4">Transaction Details</h1>
  {#if transactionDetails}
    <p>Item Name: {transactionDetails.item_name}</p>
    <p>Amount: {transactionDetails.amount}</p>
    <p>Total Price: ${transactionDetails.total_price.toFixed(2)}</p>
    <p>Buyer ID: {transactionDetails.buyer_id}</p>
    <p>Seller ID: {transactionDetails.seller_id}</p>
  {:else}
    <p>Loading transaction details...</p>
  {/if}
</div> -->


<div class="p-4 max-w-4xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <!-- Buyer Card -->
      <div class="bg-white border rounded-lg shadow-md p-6">
        <div class="flex items-center mb-4">
          <img src="" alt="Buyer Avatar" class="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 class="text-xl font-bold"></h2>
            <p class="text-gray-600">Buyer</p>
          </div>
        </div>
        <h3 class="text-lg font-semibold">Purchased Item: </h3>
        <p class="text-gray-900 font-semibold">Price: $</p>
        <p class="text-gray-600">Amount: </p>
        <p class="text-gray-600">Transaction Type: </p>
      </div>

      <!-- Seller Card -->
      <div class="bg-white border rounded-lg shadow-md p-6">
        <div class="flex items-center mb-4">
          <img src="" alt="Seller Avatar" class="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 class="text-xl font-bold"></h2>
            <p class="text-gray-600">Seller</p>
          </div>
        </div>
        <h3 class="text-lg font-semibold">Sold Item: </h3>
        <p class="text-gray-900 font-semibold">Price: $</p>
        <p class="text-gray-600">Amount: </p>
        <p class="text-gray-600">Transaction Type: </p>
      </div>
    </div>

    <!-- Bottom Horizontal Card -->
    <div class="bg-gray-100 border rounded-lg shadow-md p-6">
      <h3 class="text-lg font-bold mb-2">Transaction Details</h3>
      <p><strong>Transaction ID:</strong> </p>
      <p><strong>Date:</strong></p>
      <p><strong>Location:</strong> </p>
    </div>
</div>