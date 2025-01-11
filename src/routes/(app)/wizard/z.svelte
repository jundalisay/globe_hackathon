<!-- <script>
  import { Pie } from 'svelte-chartjs';
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
  import * as Card from '$lib/components/ui/card';
  import { ScatterChart, LineChart, BarChart, PieChart, Chart, AreaChart, Svg, Axis, Bars } from 'layerchart';

    // Dashboard data (carbon and price totals)
  let carbonTotal = 0;
  let priceTotal = 0;


  // List of products with their carbon emission and price values
  let products = [
    { name: 'Product 1', carbonEmissions: 10, price: 50 },
    { name: 'Product 2', carbonEmissions: 20, price: 70 },
    { name: 'Product 3', carbonEmissions: 30, price: 100 },
    { name: 'Product 4', carbonEmissions: 40, price: 120 }
  ];


  function addProduct(productName) {
    const product = data.find(product => item.item === productName);
    if (product) {
      product.value += 1;
    }
  }




  // Add product to totals and update pie chart
  function addProductToDashboard(product) {
    carbonTotal += product.carbonEmissions;
    priceTotal += product.price;

    // Update chart data
    // let productIndex = chartData.labels.indexOf(product.name);
    // if (productIndex === -1) {
    //   // chartData.labels.push(product.name);
    //   // chartData.datasets[0].data.push(product.carbonEmissions);
    // } else {
    //   // chartData.datasets[0].data[productIndex] += product.carbonEmissions;
    // }
  }


const data = [
  {
    "item": "apples",
    "value": carbonTotal
  },
  {
    "item": "bananas",
    "value": 1920
  },
  {
    "item": "cherries",
    "value": 960
  },
  {
    "item": "grapes",
    "value": 400
  }
]

  
</script>


<div class="container px-8 mx-auto"> 

  <h1 class="text-2xl font-bold">Employee Carbon Footprint Analytics</h1>

  <div class="grid grid-cols-2 gap-4 p-8">

  <div class="mb-6">
    <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={() => addProduct("apples")}>Add Apple</button>
    <button class="px-4 py-2 bg-green-500 text-white rounded" on:click={() => addProduct("bananas")}>Add Banana</button>
  </div>

  <!-- Display the updated data -->


  <!-- 
  <div class="mb-6">
    <p>Apples: {data.find(item => item.item === 'apples').value}</p>
    <p>Bananas: {data.find(item => item.item === 'bananas').value}</p>
  </div>

    <div class="product-list">
      <h2>Products</h2>
      <ul>
        {#each products as product (product.name)}
          <li>
            <button on:click={() => addProductToDashboard(product)}>
              {product.name} - Carbon Emissions: {product.carbonEmissions} - Price: ${product.price}
            </button>
          </li>
        {/each}
      </ul>
    </div>

    <div class="dashboard">
      <h2 class="text-xl font-bold mb-4">Carbon Emissions Breakdown</h2>      
      <p>Total Carbon Emissions: {carbonTotal}</p>
      <p>Total Price: ${priceTotal}</p>

      <div class="h-[300px] border rounded">
        <PieChart
          {data}
          key="item"
          value="value"
          range={[-90, 90]}
          outerRadius={300 / 2}
          innerRadius={-20}
          cornerRadius={10}
          padAngle={0.02}
          cRange={["blue", "red", "green", "orange"]}
          props={{ group: { y: 80 } }}
        />
      </div>
    </div>

  </div>
</div>


<style>
  main {
    font-family: 'Arial', sans-serif;
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  .product-list {
    margin-bottom: 30px;
  }

  .product-list button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #3a8ee6;
    color: white;
    border: none;
    cursor: pointer;
  }

  .product-list button:hover {
    background-color: #2b7bb3;
  }

  .dashboard {
    margin-top: 30px;
    padding: 20px;
    background-color: #f4f4f9;
    border-radius: 8px;
  }

  .pie-chart {
    margin-top: 30px;
  }
</style>
 --> 