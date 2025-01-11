<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { ScatterChart, LineChart, BarChart, PieChart, Chart, AreaChart, Svg, Axis, Bars } from 'layerchart';

  // import {  PRIVATE_API_KEY } from '$env/static/private';

  import axios from "axios";
  import { json } from '@sveltejs/kit';
  // import { env } from '$env/dynamic/private'; 
  import Gemini from "gemini-ai";


const data = [
  {
    "year": 2019,
    "basket": 1,
    "fruit": "apples",
    "value": 3840
  },
  {
    "year": 2019,
    "basket": 1,
    "fruit": "bananas",
    "value": 1920
  },
  {
    "year": 2019,
    "basket": 2,
    "fruit": "cherries",
    "value": 960
  },
  {
    "year": 2019,
    "basket": 2,
    "fruit": "grapes",
    "value": 400
  }
]

const multiSeriesData = [
  {
    "date": new Date('2024-12-10T16:00:00.000Z'),
    "apples": 27,
    "bananas": 72,
    "oranges": 52
  },
  {
    "date": new Date('2024-12-11T16:00:00.000Z'),
    "apples": 64,
    "bananas": 58,
    "oranges": 54
  },
  {
    "date": new Date('2024-12-12T16:00:00.000Z'),
    "apples": 81,
    "bananas": 51,
    "oranges": 27
  },
  {
    "date": new Date('2024-12-13T16:00:00.000Z'),
    "apples": 33,
    "bananas": 14,
    "oranges": 82
  },
  {
    "date": new Date('2024-12-14T16:00:00.000Z'),
    "apples": 23,
    "bananas": 33,
    "oranges": 32
  },
  {
    "date": new Date('2024-12-15T16:00:00.000Z'),
    "apples": 21,
    "bananas": 21,
    "oranges": 97
  },
  {
    "date": new Date('2024-12-16T16:00:00.000Z'),
    "apples": 93,
    "bananas": 97,
    "oranges": 48
  },
  {
    "date": new Date('2024-12-17T16:00:00.000Z'),
    "apples": 22,
    "bananas": 87,
    "oranges": 31
  },
  {
    "date": new Date('2024-12-18T16:00:00.000Z'),
    "apples": 75,
    "bananas": 12,
    "oranges": 39
  },
  {
    "date": new Date('2024-12-19T16:00:00.000Z'),
    "apples": 75,
    "bananas": 48,
    "oranges": 97
  },
  {
    "date": new Date('2024-12-20T16:00:00.000Z'),
    "apples": 16,
    "bananas": 59,
    "oranges": 19
  },
  {
    "date": new Date('2024-12-21T16:00:00.000Z'),
    "apples": 28,
    "bananas": 86,
    "oranges": 82
  },
  {
    "date": new Date('2024-12-22T16:00:00.000Z'),
    "apples": 47,
    "bananas": 10,
    "oranges": 66
  },
  {
    "date": new Date('2024-12-23T16:00:00.000Z'),
    "apples": 88,
    "bananas": 41,
    "oranges": 76
  },
  {
    "date": new Date('2024-12-24T16:00:00.000Z'),
    "apples": 33,
    "bananas": 38,
    "oranges": 70
  }
]

const dateSeriesData = [
  {
    "date": new Date('2024-12-30T16:00:00.000Z'),
    "value": 40,
    "baseline": 59
  },
  {
    "date": new Date('2024-12-31T16:00:00.000Z'),
    "value": 73,
    "baseline": 91
  },
  {
    "date": new Date('2025-01-01T16:00:00.000Z'),
    "value": 98,
    "baseline": 60
  },
  {
    "date": new Date('2025-01-02T16:00:00.000Z'),
    "value": 96,
    "baseline": 55
  },
  {
    "date": new Date('2025-01-03T16:00:00.000Z'),
    "value": 91,
    "baseline": 44
  },
  {
    "date": new Date('2025-01-04T16:00:00.000Z'),
    "value": 77,
    "baseline": 58
  },
  {
    "date": new Date('2025-01-05T16:00:00.000Z'),
    "value": 77,
    "baseline": 70
  }
]

const penguinDataBySpecies = [
  [
    "Adelie",
    [
      {
        "species": "Adelie",
        "island": "Torgersen",
        "bill_length_mm": 39.1,
        "bill_depth_mm": 18.7,
        "flipper_length_mm": 181,
        "body_mass_g": 3750,
        "sex": "male",
        "year": 2007
      },
      {
        "species": "Adelie",
        "island": "Torgersen",
        "bill_length_mm": 39.5,
        "bill_depth_mm": 17.4,
        "flipper_length_mm": 186,
        "body_mass_g": 3800,
        "sex": "female",
        "year": 2007
      },
      {
        "species": "Adelie",
        "island": "Torgersen",
        "bill_length_mm": 40.3,
        "bill_depth_mm": 18,
        "flipper_length_mm": 195,
        "body_mass_g": 3250,
        "sex": "female",
        "year": 2007
      },
      {
        "species": "Adelie",
        "island": "Torgersen",
        "bill_length_mm": 36.7,
        "bill_depth_mm": 19.3,
        "flipper_length_mm": 193,
        "body_mass_g": 3450,
        "sex": "female",
        "year": 2007
      },
      {
        "species": "Adelie",
        "island": "Torgersen",
        "bill_length_mm": 39.3,
        "bill_depth_mm": 20.6,
        "flipper_length_mm": 190,
        "body_mass_g": 3650,
        "sex": "male",
        "year": 2007
      },
      {
        "species": "Adelie",
        "island": "Torgersen",
        "bill_length_mm": 38.9,
        "bill_depth_mm": 17.8,
        "flipper_length_mm": 181,
        "body_mass_g": 3625,
        "sex": "female",
        "year": 2007
      },
      {
        "species": "Adelie",
        "island": "Torgersen",
        "bill_length_mm": 39.2,
        "bill_depth_mm": 19.6,
        "flipper_length_mm": 195,
        "body_mass_g": 4675,
        "sex": "male",
        "year": 2007
      }
    ]
  ]
]


  const gemini = new Gemini(123123124);

  /**PRIVATE_API_KEY
   * Sends a POST request to create a chat and return the result as JSON.
   *
   * @param {import('@sveltejs/kit').RequestEvent } request - The request object containing the query.
   * @return {Promise<object>} The JSON response with the chat text or an error message.
   */
  export async function POST({ request }) {
    // const { msg, chats } = await request.json();
    // console.log(msg, chats);

    if (!msg) { return json({ error: 'No message provided' }, { status: 400 });}
    
    try {
      const chat = gemini.createChat({
        messages: data,
        temperature: 0.7,
        maxOutputTokens: 1000
      });
      
      let text = await gemini.ask(msg.text);

      return json({ text }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json', 
        },
      });
    } 
    catch (error) {
      return json({ error: error.message }, { status: 500 });
    }
  }

  let chatResponse = "";

  // async () => {
  //   // Fetch a response from Gemini AI based on the blog content
  //   try {
  //     const response = await axios.post("https://api.gemini-ai.com/your-endpoint", {
  //       text: data,
  //     });
  //     chatResponse = response.data.message.substring(0, 500); // Ensure the response is limited to 500 characters
  //   } catch (error) {
  //     chatResponse = "Sorry, there was an error fetching a response from Gemini AI.";
  //   }
  // };


</script>


<svelte:head>
  <title>Dashboard</title>
</svelte:head>





<section>
<!-- md:w-[800px]  -->
<div class="container px-8 mx-auto"> 

  <h1 class="text-2xl font-bold">Employee Carbon Footprint Analytics</h1>

  <div class="grid grid-cols-2 gap-4 p-8">

    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <dl class="flex flex-wrap justify-center gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
            <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-8xl text-primary font-extrabold">73</dt>
                <dd class="text-gray-500 dark:text-gray-400">Monthly Carbon/mo in kg</dd>
            </div>

            <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-4xl text-destructive font-extrabold">100,000</dt>
                <dd class="text-gray-500 dark:text-gray-400">Monthly Expenses in Pesos</dd>
            </div>
            <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-4xl font-extrabold">98</dt>
                <dd class="text-gray-500 dark:text-gray-400">Monthly Transactions Done</dd>
            </div>
            <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Contributors</dd>
            </div>
        </dl>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-bold">Carbon Emission vs Peso Spent</h2>
      <small>...</small>

      <div class="h-[300px] p-4 m-4 border rounded">
        <BarChart
          data={dateSeriesData}
          x="date"
          series={[
            { key: "baseline", color: "blue" },
            {
              key: "value",
              color: "red",
              props: { inset: 16 },
            },
          ]}
        />
      </div>        
    </div>

    <!-- Part 2 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-bold">Most Emitting Products</h2>
      <small>...</small>
      <div class="h-[500px] p-4 border rounded">
        <div class="h-[400px] p-4 border rounded">
          <ScatterChart
            x="flipper_length_mm"
            y="bill_length_mm"
            series={penguinDataBySpecies.map(([species, data], i) => {
              return {
                key: species,
                data,
                color: [
                  "hsl(var(--color-primary))",
                  "hsl(var(--color-secondary))",
                  "hsl(var(--color-success))",
                ][i],
              };
            })}
          />
        </div>
      </div>
    </div>


    <div class="bg-white p-6 rounded-lg shadow-md">

      <h2 class="text-xl font-bold mb-4">Products and Services Availed</h2>      
      <div class="h-[300px] border rounded">
        <PieChart
          {data}
          key="fruit"
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

    <!-- Part 4 -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-bold">Emissions by Department</h2>
      <small>...</small>

      <div class="h-[300px] p-4 border rounded">
        <AreaChart
          data={multiSeriesData}
          x="date"
          series={[
            { key: "apples", color: "hsl(var(--color-danger))" },
            {
              key: "bananas",
              color: "hsl(var(--color-success))",
            },
            {
              key: "oranges",
              color: "hsl(var(--color-warning))",
            },
          ]}
        />
      </div>
    </div>


    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-bold">Leaderboard</h2>
      <small>...</small>

      <div class="flex justify-center">
        <div class="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl">

          <div class="flex items-center space-x-4 hover:bg-gray-100 p-4 rounded-lg transition-all duration-300">

            <img src="/avatars/1.jpg" alt="Employee Avatar" class="w-16 h-16 rounded-full border border-gray-300">

            <div class="flex-1">
              <div class="flex justify-between">
                <p class="text-lg font-semibold text-gray-800">John Doe</p>
                <p class="text-sm text-gray-600">Department: HR</p>
              </div>
              <p class="text-sm text-gray-500 mt-1">$60,000 / year</p>
            </div>
          </div>

          <div class="flex items-center space-x-4 hover:bg-gray-100 p-4 rounded-lg transition-all duration-300">

            <img src="/avatars/2.jpg" alt="Employee Avatar" class="w-16 h-16 rounded-full border border-gray-300">

            <div class="flex-1">
              <div class="flex justify-between">
                <p class="text-lg font-semibold text-gray-800">John Doe</p>
                <p class="text-sm text-gray-600">Department: HR</p>
              </div>
              <p class="text-sm text-gray-500 mt-1">$60,000 / year</p>
            </div>
          </div>

          <div class="flex items-center space-x-4 hover:bg-gray-100 p-4 rounded-lg transition-all duration-300">

            <img src="/avatars/3.jpg" alt="Employee Avatar" class="w-16 h-16 rounded-full border border-gray-300">

            <div class="flex-1">
              <div class="flex justify-between">
                <p class="text-lg font-semibold text-gray-800">John Doe</p>
                <p class="text-sm text-gray-600">Department: HR</p>
              </div>
              <p class="text-sm text-gray-500 mt-1">$60,000 / year</p>
            </div>
          </div>      

          <div class="flex items-center space-x-4 hover:bg-gray-100 p-4 rounded-lg transition-all duration-300">

            <img src="/avatars/4.jpg" alt="Employee Avatar" class="w-16 h-16 rounded-full border border-gray-300">

            <div class="flex-1">
              <div class="flex justify-between">
                <p class="text-lg font-semibold text-gray-800">John Doe</p>
                <p class="text-sm text-gray-600">Department: HR</p>
              </div>
              <p class="text-sm text-gray-500 mt-1">$60,000 / year</p>
            </div>
          </div>    

          <div class="flex items-center space-x-4 hover:bg-gray-100 p-4 rounded-lg transition-all duration-300">

            <img src="/avatars/5.jpg" alt="Employee Avatar" class="w-16 h-16 rounded-full border border-gray-300">

            <div class="flex-1">
              <div class="flex justify-between">
                <p class="text-lg font-semibold text-gray-800">John Doe</p>
                <p class="text-sm text-gray-600">Department: HR</p>
              </div>
              <p class="text-sm text-gray-500 mt-1">$60,000 / year</p>
            </div>
          </div>          
        </div>
      </div>


  <div class="chat-container">
    <div class="chat-response">
      <p>{chatResponse}</p>
    </div>
  </div>

<div class="chat-container">
        <div class="chat-box">
          <p><strong>Gemini Chat:</strong></p>
          <p>{chatResponse}</p>
        </div>
      </div>

    </div>

  </div>

</section>



<style>
  .chat-container {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 500px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }

  .chat-box {
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }

  .chat-box p {
    margin: 0;
  }

  .chat-box strong {
    color: #2d2d2d;
  }

  .chat-container {
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background-color: #f8f9fa;
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .chat-response {
    font-family: "Arial", sans-serif;
    color: #333;
    font-size: 1em;
    line-height: 1.5;
  }  
</style>

