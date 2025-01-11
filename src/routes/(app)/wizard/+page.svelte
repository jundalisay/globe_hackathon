<script lang="ts">
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';
  import { fade, slide } from 'svelte/transition';
  import { writable } from 'svelte/store';

  type FormData = {
    householdUsers: number;
    videoConferencing: string;
    selectedApps: App[];
  };

  type App = {
    id: string;
    name: string;
    icon: string;
    usage: string;
  };

  const availableApps: App[] = [
    { id: '1', name: 'Netflix', icon: '🎬', usage: '~3GB/hour HD' },
    { id: '2', name: 'Zoom', icon: '📹', usage: '~1GB/hour HD' },
    { id: '3', name: 'Spotify', icon: '🎵', usage: '~150MB/hour high quality' },
    { id: '4', name: 'YouTube', icon: '▶️', usage: '~2GB/hour HD' },
    { id: '5', name: 'Gaming', icon: '🎮', usage: '~100MB/hour' }
  ];

  let currentStep = 0;
  let formData = writable<FormData>({
    householdUsers: 1,
    videoConferencing: 'occasional',
    selectedApps: []
  });

  let draggedApps = availableApps;
  let selectedApps: App[] = [];

  const flipDurationMs = 300;

  function handleDndConsider(e: CustomEvent<App[]>) {
    selectedApps = e.detail;
  }

  function handleDndFinalize(e: CustomEvent<App[]>) {
    selectedApps = e.detail;
    formData.update(data => ({ ...data, selectedApps }));
  }

  function nextStep() {
    if (currentStep < 2) currentStep++;
  }

  function prevStep() {
    if (currentStep > 0) currentStep--;
  }

  function handleSubmit() {
    console.log('Form submitted:', $formData);
    // Handle form submission
  }

  $: console.log('Current form data:', $formData);
</script>

<div class="max-w-2xl mx-auto p-6">
  <div class="mb-8">
    <div class="flex items-center justify-between mb-4">
      {#each Array(3) as _, i}
        <div class="flex items-center">
          <div class={`w-8 h-8 rounded-full flex items-center justify-center ${
            i <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}>
            {i + 1}
          </div>
          {#if i < 2}
            <div class={`h-1 w-20 ${
              i < currentStep ? 'bg-blue-500' : 'bg-gray-200'
            }`}></div>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    {#if currentStep === 0}
      <div transition:fade>
        <h2 class="text-xl font-semibold mb-4">Household Information</h2>
        <div class="space-y-4">
          <div>
            <label for="users" class="block mb-2">Number of household users</label>
            <input
              type="number"
              id="users"
              min="1"
              max="10"
              bind:value={$formData.householdUsers}
              class="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label for="videoConferencing" class="block mb-2">
              Video conferencing needs
            </label>
            <select
              id="videoConferencing"
              bind:value={$formData.videoConferencing}
              class="w-full p-2 border rounded"
            >
              <option value="occasional">Occasional (few times a month)</option>
              <option value="regular">Regular (few times a week)</option>
              <option value="heavy">Heavy (daily use)</option>
            </select>
          </div>
        </div>
      </div>
    {:else if currentStep === 1}
      <div transition:fade>
        <h2 class="text-xl font-semibold mb-4">App Selection</h2>
        <p class="mb-4">Drag and drop apps you use regularly:</p>
        
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="border p-4 rounded">
            <h3 class="font-semibold mb-2">Available Apps</h3>
            <div
              use:dndzone={{items: draggedApps, flipDurationMs}}
              on:consider={e => handleDndConsider(e)}
              on:finalize={e => handleDndFinalize(e)}
              class="min-h-[200px] space-y-2"
            >
              {#each draggedApps as app (app.id)}
                <div
                  animate:flip={{duration: flipDurationMs}}
                  class="p-3 bg-white border rounded shadow-sm cursor-move hover:bg-gray-50"
                >
                  <div class="flex items-center space-x-2">
                    <span class="text-2xl">{app.icon}</span>
                    <div>
                      <p class="font-medium">{app.name}</p>
                      <p class="text-sm text-gray-500">{app.usage}</p>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <div class="border p-4 rounded">
            <h3 class="font-semibold mb-2">Selected Apps</h3>
            <div
              use:dndzone={{items: selectedApps, flipDurationMs}}
              on:consider={e => handleDndConsider(e)}
              on:finalize={e => handleDndFinalize(e)}
              class="min-h-[200px] space-y-2"
            >
              {#each selectedApps as app (app.id)}
                <div
                  animate:flip={{duration: flipDurationMs}}
                  class="p-3 bg-white border rounded shadow-sm cursor-move hover:bg-gray-50"
                >
                  <div class="flex items-center space-x-2">
                    <span class="text-2xl">{app.icon}</span>
                    <div>
                      <p class="font-medium">{app.name}</p>
                      <p class="text-sm text-gray-500">{app.usage}</p>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {:else if currentStep === 2}
      <div transition:fade>
        <h2 class="text-xl font-semibold mb-4">Review Your Information</h2>
        <div class="space-y-4">
          <div class="border p-4 rounded">
            <h3 class="font-medium">Household Users</h3>
            <p>{$formData.householdUsers}</p>
          </div>
          <div class="border p-4 rounded">
            <h3 class="font-medium">Video Conferencing</h3>
            <p class="capitalize">{$formData.videoConferencing}</p>
          </div>
          <div class="border p-4 rounded">
            <h3 class="font-medium">Selected Apps</h3>
            <div class="mt-2 space-y-2">
              {#each $formData.selectedApps as app}
                <div class="flex items-center space-x-2">
                  <span>{app.icon}</span>
                  <span>{app.name}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/if}

    <div class="flex justify-between mt-8">
      {#if currentStep > 0}
        <button
          type="button"
          on:click={prevStep}
          class="px-4 py-2 border rounded hover:bg-gray-50"
        >
          Previous
        </button>
      {:else}
        <div></div>
      {/if}

      {#if currentStep < 2}
        <button
          type="button"
          on:click={nextStep}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      {:else}
        <button
          type="submit"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Submit
        </button>
      {/if}
    </div>
  </form>
</div>