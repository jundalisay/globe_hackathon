<script>
  import { page } from '$app/stores';
  import { CartContext } from '$lib/CartContext';

  let quantity = 1;


  function handleAddToCart() {
    CartContext.addProductToCart({
      id: $page.params.id,
      quantity
    });
  }
</script>



<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-4">{product.name}</h1>
  <p class="text-lg mb-6">{product.description}</p>
  <p class="text-2xl font-bold">$ {product.price}</p>

  <div class="flex items-center mb-4">
    <button
      class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
      on:click={() => quantity--}
      disabled={quantity <= 1}
    >
      -
    </button>
    <input
      type="number"
      class="border border-gray-300 px-4 py-2 w-16 text-center"
      bind:value={quantity}
      min="1"
    />
    <button
      class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
      on:click={() => quantity++}
    >
      +
    </button>
  </div>

  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={handleAddToCart}
  >
    Add to Cart
  </button>
</div>



<form method="POST" class="p-4">

  <img class="w-full h-64 object-cover mb-4" src={data.item.photo} alt={data.item.title} />
  <h1 class="text-2xl font-bold mb-4">{data.item.name}</h1>
  <p class="text-lg mb-4">{data.item.description}</p>
  <p class="text-xl font-semibold mb-4">${data.item.price}</p>
  
  {#if $errorMessage}
    <div class="error-message" style="color: red;">
      {$errorMessage}
    </div>
  {/if}

    <fieldset class="mb-4">
      <legend class="block mb-2">Receiving as:</legend>
      <label class="inline-flex items-center mr-4">
        <!-- <input type="radio" value="Exchange" bind:group={paymentMethod} checked class="form-radio" /> -->
        <span class="ml-2">Exchange</span>
      </label>
      <label class="inline-flex items-center mr-4">
        <!-- <input type="radio" value="Donation" bind:group={paymentMethod} class="form-radio" /> -->
        <span class="ml-2">Donation</span>
      </label>
      <label class="inline-flex items-center">
        <!-- <input type="radio" value="Transfer" bind:group={paymentMethod} class="form-radio" /> -->
        <span class="ml-2">Transfer</span>
      </label>
    </fieldset>

<!--     <button on:click={processTransaction} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Confirm
    </button> -->

  <button on:click={handleSubmit}>Submit</button>

<!--   <button on:click={handleAddToCart} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Add to Cart
  </button> -->

<!--   <button on:click={() => editProduct(item)} class="text-blue-500 hover:underline">
    Edit
  </button>

  <button on:click={() => deleteProduct(item)} class="text-blue-500 hover:underline">
    Delete
  </button> -->

  <!-- <ProductForm {selectedProduct} on:submit={addOrUpdateProduct} on:delete={deleteProduct} /> -->

  <button on:click={re(item.id)}>home</button>

</form>



