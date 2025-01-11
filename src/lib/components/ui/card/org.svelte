<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import Trash from '~icons/lucide/trash-2';
  import Pen from '~icons/lucide/pen';

  import { Modal, Label, Input, Checkbox } from 'flowbite-svelte';
  import OrgForm from '$lib/components/forms/org.svelte';

  // let { modalname = formModal + item.id } = false;
  export let data;  
  export let item = {
    id: '',
    owner: '',
    city: '',
    region: '',
    description: '',
    name: '',
    logo: '',
    phone: '',
    email: '',    
    url1: '',
    url2: '',
    url3: '',
    url4: '',
    url5: '',            
  };

  export let user_id;

  console.log('Page Svelte user_id: ', user_id);

</script>


<!-- <div class="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer" on:click>
  <img class="w-full h-48 object-cover" src={item.logo} alt={item.name} />
  <div class="p-4">
    <h2 class="font-bold text-xl mb-2">{item.name}</h2>
    <p class="text-gray-700 text-base mb-4">{item.description}</p>
    <p class="text-lg font-semibold mb-4">{item.city}</p>
    <button  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Visit Website
    </button>
  </div>
</div> -->

<!-- <Modal bind:open={modalnamez} size="xs" autoclose={false} class="container md:w-[800px] px-8 mx-auto">
  <OrgForm data={data.form} /> -->
<!--   <form class="flex flex-col space-y-6" action="#">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <div class="flex items-start">
      <Checkbox>Remember me</Checkbox>
      <a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Lost password? </a>
    </div>
    <Button type="submit" class="w-full1">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500"> Create account </a>
    </div>
  </form> -->
<!-- </Modal> -->


<div class="bg-card border rounded-lg shadow-md p-6">

  <div class="flex items-center mb-4">
    <img src={item.logo} alt="{item.name} Logo" class="w-16 h-16 rounded-full mr-4" />
    <div>
      <h2 class="text-xl font-bold">{item.name}</h2>

      {#if item.city}
        <p class="text-gray-600">{item.city}, {item.regiom}</p>
      {/if}      
    </div>
  </div>

  {#if item.description}  
    <p class="text-gray-700 mb-4">{item.description}</p>
  {/if}

  <div class="flex items-center gap-2 px-2">

    {#if item.phone}
      <div class="mr-2">
        <svg width="30px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5e5c64"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#5e5c64" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
      <div class="mr-6">
        <p>{item.phone}</p>
      </div>
    {/if}


    {#if item.email}
      <div class="mr-2">
        <svg width="30px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#5e5c64" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#5e5c64" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
      </div>
      <div class="mr-6">
        <p>{item.email}</p>
      </div>
    {/if}

  </div>


  <p class="font-semibold">
    <a href={`tel:${0}`} class="text-blue-600"></a>
  </p>
  
  <!-- <p class="font-semibold">Email: <a href={`mailto:${0}`} class="text-blue-600">{item.email}</a></p> -->
  
  <div class="flex space-x-4">
    {#if item.url1}
      <a href={item.url1} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600">
        {item.url1}
      </a>
    {/if}
    {#if item.url2}
      <a href={item.url2} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600">
        <i class="fab fa-twitter"></i>
      </a>
    {/if}
    {#if item.url3}
      <a href={item.url3} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600">
        <i class="fab fa-linkedin-in"></i>
      </a>
    {/if}
    {#if item.url4}
      <a href={item.url4} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-600">
        <i class="fab fa-instagram"></i>
      </a>
    {/if}
  </div>



<hr class="my-4">

  {#if item.user_id == user_id}
    <!-- data.org?.id  builders={[builder]} on:click={() => (modalname = true)} -->
    <div class="flex justify-center gap-2 px-2">
      <Button class="flex flex-nowrap items-center gap-2 shadow">
        <Pen class="h-4 w-4" />
        Edit
      </Button>

      <Button variant="destructive" class="flex flex-nowrap items-center gap-2 shadow">
        <Trash class="h-4 w-4" />
        Delete
      </Button>
    </div>
  {/if}  
</div>



<!-- fb
<svg fill="#5e5c64" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,3V21a1,1,0,0,1-1,1H15.8V14.255h2.6l.39-3.018H15.8V9.309c0-.874.242-1.469,1.5-1.469h1.6V5.14a21.311,21.311,0,0,0-2.329-.119A3.636,3.636,0,0,0,12.683,9.01v2.227H10.076v3.018h2.607V22H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H21A1,1,0,0,1,22,3Z"></path></g></svg> 

whatsapp
<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#5e5c64"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#5e5c64"></path> </g></svg>

viber 
<svg width="64px" height="64px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M30 15.3785C30 6.20699 26.7692 2 16 2C5.23077 2 2 6.20699 2 15.3785C2 21.9055 3.63629 25.9182 8.46154 27.6895V30.7774C8.46154 31.9141 9.88769 32.4332 10.6264 31.5656L13.1164 28.6411C14.0113 28.7185 14.9713 28.7569 16 28.7569C26.7692 28.7569 30 24.5499 30 15.3785ZM13.7113 26.5316C14.4251 26.5882 15.1872 26.6164 16 26.6164C25.1124 26.6164 27.8462 23.0825 27.8462 15.3785C27.8462 7.67443 25.1124 4.14055 16 4.14055C6.88757 4.14055 4.15385 7.67443 4.15385 15.3785C4.15385 20.8239 5.51965 24.1859 9.53846 25.6891V30.2639C9.53846 30.6627 10.0389 30.8449 10.2981 30.5404L13.7113 26.5316Z" fill="#BFC8D0"></path> <path d="M16 25.8548C15.1766 25.8548 14.4047 25.8262 13.6815 25.7685L10.224 29.845C9.96145 30.1546 9.45455 29.9693 9.45455 29.5638V24.9119C5.38354 23.3834 4 19.9647 4 14.4274C4 6.59346 6.76923 3 16 3C25.2308 3 28 6.59346 28 14.4274C28 22.2613 25.2308 25.8548 16 25.8548Z" fill="#9179EE"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M30 14.3785C30 5.20699 26.7692 1 16 1C5.23077 1 2 5.20699 2 14.3785C2 20.9055 3.63629 24.9182 8.46154 26.6895V29.7774C8.46154 30.9141 9.88769 31.4332 10.6264 30.5656L13.1164 27.6411C14.0113 27.7185 14.9713 27.7569 16 27.7569C26.7692 27.7569 30 23.5499 30 14.3785ZM13.7113 25.5316C14.4251 25.5882 15.1872 25.6164 16 25.6164C25.1124 25.6164 27.8462 22.0825 27.8462 14.3785C27.8462 6.67443 25.1124 3.14055 16 3.14055C6.88757 3.14055 4.15385 6.67443 4.15385 14.3785C4.15385 19.8239 5.51965 23.1859 9.53846 24.6891V29.2639C9.53846 29.6627 10.0389 29.8449 10.2981 29.5404L13.7113 25.5316Z" fill="white"></path> <path d="M11.5432 12.1345L11.5026 12.157L11.4668 12.1866C11.1902 12.4154 10.7756 13.0434 11.1388 13.8197C11.4414 14.4665 12.1157 15.7874 13.3005 16.7826C14.4592 17.756 15.6965 18.2795 16.5092 18.4509L16.5603 18.4617H16.6069C16.6091 18.4619 16.614 18.4624 16.6219 18.4636C16.6412 18.4663 16.6645 18.4703 16.7012 18.4767L16.7874 17.9842L16.7012 18.4767C16.7075 18.4778 16.714 18.479 16.7208 18.4802C16.9709 18.5244 17.5704 18.6304 18.0729 18.1297C18.3954 17.8083 18.6898 17.4732 18.8165 17.3225C18.9055 17.2413 19.1956 17.0731 19.5626 17.1972C20.2576 17.4321 21.0839 17.9621 21.4833 18.2308C21.7925 18.439 22.4924 18.9404 22.8079 19.1682L22.8082 19.1684C22.8344 19.1873 22.8959 19.2493 22.9291 19.3354C22.9557 19.4042 22.97 19.4988 22.9061 19.6357C22.7875 19.8895 22.4266 20.374 21.9378 20.7978C21.4401 21.2294 20.9222 21.5 20.5072 21.5C20.5087 21.5 20.5072 21.4998 20.5025 21.4992C20.484 21.4967 20.4153 21.4874 20.2792 21.4568C20.1262 21.4225 19.9195 21.3686 19.6669 21.2926C19.1622 21.1407 18.485 20.904 17.7029 20.5675C16.1375 19.8941 14.1668 18.8277 12.3218 17.2572C11.1613 16.2694 10.0664 14.9036 9.2138 13.6251C8.35407 12.3358 7.77896 11.1932 7.62244 10.6655L7.61148 10.6285L7.595 10.5937C7.55603 10.5114 7.50112 10.3355 7.50002 10.136C7.49895 9.94333 7.54725 9.75923 7.67465 9.60657C8.09467 9.10322 8.53938 8.60859 9.52049 8.13395C9.61188 8.08974 9.75504 8.05076 9.89575 8.04849C10.04 8.04617 10.1152 8.082 10.1452 8.10835C10.5206 8.43751 11.1025 9.01857 11.4945 9.51513C11.6971 9.77164 11.9418 10.0975 12.1458 10.3806C12.2478 10.5222 12.3377 10.6506 12.4062 10.7527C12.4405 10.8039 12.4679 10.8462 12.4881 10.8788C12.5019 10.9012 12.5093 10.9143 12.5124 10.9199C12.5141 10.9256 12.5218 10.9498 12.5286 10.9939C12.5371 11.0494 12.5411 11.1177 12.5354 11.1891C12.5235 11.3351 12.4755 11.4524 12.3892 11.5315C12.0962 11.7998 11.699 12.0482 11.5432 12.1345ZM16.2766 6.51613C16.2769 6.51585 16.2772 6.51557 16.2775 6.51527C16.2847 6.50852 16.2994 6.5 16.3226 6.5C20.3145 6.5 23.4984 9.53785 23.5 13.223C23.4994 13.2239 23.4983 13.2251 23.4967 13.2267C23.4895 13.2334 23.4747 13.2419 23.4516 13.2419C23.4285 13.2419 23.4137 13.2334 23.4065 13.2267C23.4049 13.2251 23.4039 13.2239 23.4032 13.223C23.4016 9.49946 20.2032 6.53226 16.3226 6.53226C16.2994 6.53226 16.2847 6.52374 16.2775 6.51699C16.2772 6.51669 16.2769 6.5164 16.2766 6.51613ZM16.2775 10.646C16.2772 10.6457 16.2769 10.6454 16.2766 10.6452C16.2769 10.6449 16.2772 10.6446 16.2775 10.6443C16.2847 10.6376 16.2994 10.629 16.3226 10.629C17.8916 10.629 19.1113 11.8182 19.1129 13.223C19.1123 13.2239 19.1112 13.2251 19.1096 13.2267C19.1024 13.2334 19.0877 13.2419 19.0645 13.2419C19.0414 13.2419 19.0266 13.2334 19.0194 13.2267C19.0178 13.2251 19.0168 13.2239 19.0161 13.223C19.0145 11.7799 17.7803 10.6613 16.3226 10.6613C16.2994 10.6613 16.2847 10.6528 16.2775 10.646ZM16.2775 8.5815C16.2772 8.58121 16.2769 8.58092 16.2766 8.58065C16.2769 8.58037 16.2772 8.58008 16.2775 8.57979C16.2847 8.57304 16.2994 8.56452 16.3226 8.56452C19.1031 8.56452 21.3048 10.678 21.3065 13.223C21.3058 13.2239 21.3048 13.2251 21.3032 13.2267C21.296 13.2334 21.2812 13.2419 21.2581 13.2419C21.2349 13.2419 21.2201 13.2334 21.213 13.2267C21.2114 13.2251 21.2103 13.2239 21.2097 13.223C21.2081 10.6397 18.9917 8.59677 16.3226 8.59677C16.2994 8.59677 16.2847 8.58825 16.2775 8.5815Z" fill="white" stroke="white" stroke-linecap="round"></path> </g></svg>
-->




<!-- on:click={handleAddToCart} -->
