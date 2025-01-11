<script lang="ts">
	import * as Card from '$lib/components/ui/card';
  import { Line } from 'svelte-chartjs';
  import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip } from 'chart.js';

  // expose session data?
  export let data: PageServerData;  
  
  console.log("Page Server Points", data.transactions);


  // Register Chart.js components
  ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip);

  let pointsBalance = 1200; // Example points balance
  let pointsTrend = [100, 200, 150, 300, 400, 350, 500]; // Example trend data
  let topPurchasedItems = [
    { id: 1, name: "Item A", image: "/images/ios.jpg" },
    { id: 2, name: "Item B", image: "/images/ios.jpg" },
    { id: 3, name: "Item C", image: "/images/ios.jpg" },
    { id: 4, name: "Item D", image: "/images/fries.jpg" },
    { id: 5, name: "Item E", image: "/images/potato.jpg" }
  ];
  let topSellers = [
    { id: 1, name: "Seller A", avatar: "https://via.placeholder.com/50" },
    { id: 2, name: "Seller B", avatar: "https://via.placeholder.com/50" },
    { id: 3, name: "Seller C", avatar: "https://via.placeholder.com/50" },
    { id: 4, name: "Seller D", avatar: "https://via.placeholder.com/50" },
    { id: 5, name: "Seller E", avatar: "https://via.placeholder.com/50" }
  ];
  let commonLocations = ["Location A", "Location B", "Location C", "Location D", "Location E"];
  let averageClosureTime = "2 days"; // Example average time

  // Chart options for points trend
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

</script>



<svelte:head>
	<title>Points Dashboard</title>
</svelte:head>

<!-- <Card.Root>
	<Card.Header>
		<div class="flex flex-nowrap items-center gap-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current text-yellow-500 dark:text-yellow-400"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/></svg
			>
			<Card.Title>Demo Content</Card.Title>
		</div>
		<Card.Description>
			This page is just a placeholder. Replace this page with your app's content
			and functionality.
		</Card.Description>
	</Card.Header>
	<Card.Content>
		The <a href="/settings" class="underline">settings</a> page is a functional demo.
	</Card.Content>
</Card.Root> -->

<!-- <main class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"> -->

<div class="grid gap-6 px-4">


  <h1 class="text-2xl font-bold mb-4">Points Dashboard</h1>

<!--   <Card.Root>
  	<Card.Header>
  		<div class="flex flex-nowrap items-center gap-3">
  			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current text-yellow-500 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg >
  			<Card.Title>Demo Content</Card.Title>
  		</div>
  		<Card.Description>
  			This page is just a placeholder. Replace this page with your app's content
  			and functionality.
  		</Card.Description>
  	</Card.Header>
  	<Card.Content>
  		The <a href="/settings" class="underline">settings</a> page is a functional demo.
  	</Card.Content>
  </Card.Root>
 -->


<div class="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Card 1: Points Balance -->
  <div class="bg-card border rounded-lg shadow-lg p-6">
    <h2 class="text-xl font-bold mb-2">Points Balance</h2>
    <p class="text-4xl font-semibold">pts</p>
  </div>

  <!-- Card 2: Points Trend -->
  <div class="bg-card border rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold mb-2">Points Trend</h2>
    <Line 
      {chartOptions}  

      {pointsTrend} 
    />
  </div>
      <!-- bind:this={lineChart} -->


  <!-- Card 3: Top Purchased Items -->
  <div class="bg-card border rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold mb-2">Top 5 Purchased Items</h2>
    <div class="space-y-2">
      {#each data.transactions as item}
        <div class="flex items-center rounded-lg p-2">
          <img src={item.image} alt={item.name} class="w-12 h-12 rounded mr-2" />
          <span class="font-semibold">{item.name}</span>
        </div>
      {/each}
    </div>
  </div>






  <!-- Card 4: Top Sellers -->
  <div class="bg-card border rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold mb-2">Top 5 Sellers</h2>
    <div class="space-y-2">
      {#each data.users as seller}
        <div class="flex items-center">
          <img src={seller.photo} alt={seller.name} class="w-10 h-10 rounded-full mr-2" />
          <span class="font-semibold">{seller.name}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- Card 5: Common Transaction Locations -->
  <div class="bg-card border rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold mb-2">Common Transaction Locations</h2>
    <ul class="list-disc ml-6">
      {#each data.transactions as item}
        <div class="flex items-center rounded-lg p-2">
          <img src={item.image} alt={item.name} class="w-12 h-12 rounded mr-2" />
          <span class="font-semibold">{item.name}</span>
        </div>
      {/each}
    </ul>
  </div>

  <!-- Card 6: Average Time to Close a Transaction -->
  <div class="bg-card border rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold mb-2">Debt-Credit Ratio</h2>
    <p class="text-lg">0.80</p>
    <h2 class="text-xl font-bold mb-2">Average Time for 1st Return Transaction</h2>
    <p class="text-lg">3 months</p>
    <h2 class="text-xl font-bold mb-2">Average Transactions per Exchangee</h2>
    <p class="text-lg">5</p>
  </div>
</div>

<style>
  /* Custom styles for the chart */
  .chart-container {
    position: relative;
    height: 300px;
    width: 100%;
  }
</style>
</div>