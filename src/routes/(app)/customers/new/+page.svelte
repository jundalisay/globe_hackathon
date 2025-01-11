<script lang="ts">
  // import Newitem from '$lib/components/forms/newitem.svelte';
  import NewForm from './new-form.svelte';

  export let data;
</script>



<div class="p-4 max-w-xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">Create New Item</h1>

  <NewForm data={data.form} />

</div>