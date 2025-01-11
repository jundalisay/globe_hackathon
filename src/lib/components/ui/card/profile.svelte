<script lang="ts">
  export let profile = {
    id: '',
    name: '',
    city: '',
    region: '',
    description: '',
    photo: ''
  }
</script>


<div class="bg-card border rounded-lg shadow p-6">
  <div class="flex items-center mb-4">
    <img src={profile.photo} alt="{profile.name} Logo" class="w-16 h-16 rounded-full mr-4" />
    <div>
      <h2 class="text-xl font-bold">{profile.name}</h2>
      {#if profile.city}
        <p class="text-gray-600">{profile.city}, {profile.regiom}</p>
      {/if}

    </div>
  </div>
  <p class="text-gray-700 mb-4">{profile.description}</p>


</div>

<!-- on:click={handleAddToCart} -->
