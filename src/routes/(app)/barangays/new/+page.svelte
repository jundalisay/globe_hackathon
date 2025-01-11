<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import OrgForm from './orgform.svelte';
// import OrgForm from '$lib/components/forms/org.svelte';
  export let data;

</script>


<svelte:head>
  <title>New Org</title>
</svelte:head>



<div class="p-4 max-w-xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">Create New Org</h1>

  <OrgForm data={data.form} />
  
</div>

