<script lang="ts">
  export let item = {
    id: '',
    name: '',
    description: '',
    price: 0,
    photo: '',
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1, // Default quantity
    };
    // Dispatch an event to notify the parent component to add the item to the cart
    dispatch('add-to-cart', cartItem);
  };

  // const goToDetails = (id) => {
  //   goto(`/orgs/${id}`);
  // };
</script>



<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card cursor-pointer" on:click>
  <img class="w-full h-48 object-cover" src={item.photo} alt={item.name} />
  <div class="p-4">
    <h2 class="font-bold text-xl mb-2">{item.name}</h2>
    <p class="text-gray-700 text-base mb-4">{item.description}</p>
    <p class="text-lg font-semibold mb-4">{item.points} Points</p>
  </div>
</div>

