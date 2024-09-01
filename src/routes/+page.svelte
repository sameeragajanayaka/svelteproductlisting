<svelte:head>
  <title>Home</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div>
  <div class="">
    <h1 class="pb-5">Our Products</h1>
    <div style="w-full">
      <div
        class="box rounded-full border border-gray-300 bg-gray-100 p-6 pb-1 w-full mb-4"
      >
        <div class="grid grid-cols-5 gap-4">
          <div class="col-span-2">
            <div class="flex items-center mb-5 gap-1">
              <p class="px-1 font-medium leading-6 text-black mr-2">Categroy</p>
			  <select
              id="FROM"
              class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
            >
              <option selected>Min</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
            </div>
          </div>

          <div class="col-span-2">
            <div class="flex items-center mb-5 gap-1">
              <p class="px-1 font-medium leading-6 text-black mr-2">Price</p>
              <div class="relative w-full">
                <input
                  id="FromPrice"
                  placeholder="From"
                  class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                />
              </div>
              <p class="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
              <div class="relative w-full">
                <input
                  id="ToPrice"
                  placeholder="To"
                  class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                />
              </div>
            </div>
          </div>

          <div class="">
			<button
          class="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-gray-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200"
        >
          Apply
        </button>
		  </div>
        </div>
      </div>
    </div>
    <div style="display: flex;justify-content: flex-end">
      <select
        class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg w-1/5 p-2.5"
      >
        <option>Sort by price Asc</option>
        <option>Sort by price Desc</option>
        <option>Sort by Name Asc</option>
        <option>Sort by Name Desc</option>
      </select>
    </div>

    <div
      class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
    >
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style="background-image: url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"
        ></div>
        <div class="px-5 py-3">
          <h3 class="text-gray-700 uppercase">Chanel</h3>
          <span class="text-gray-500 mt-2">$12</span>
        </div>
      </div>
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style="background-image: url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"
        ></div>
        <div class="px-5 py-3">
          <h3 class="text-gray-700 uppercase">Chanel</h3>
          <span class="text-gray-500 mt-2">$12</span>
        </div>
      </div>
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style="background-image: url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"
        ></div>
        <div class="px-5 py-3">
          <h3 class="text-gray-700 uppercase">Man Mix</h3>
          <span class="text-gray-500 mt-2">$12</span>
        </div>
      </div>
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style="background-image: url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
        ></div>
        <div class="px-5 py-3">
          <h3 class="text-gray-700 uppercase">Classic watch</h3>
          <span class="text-gray-500 mt-2">$12</span>
        </div>
      </div>
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style="background-image: url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')"
        ></div>
        <div class="px-5 py-3">
          <h3 class="text-gray-700 uppercase">woman mix</h3>
          <span class="text-gray-500 mt-2">$12</span>
        </div>
      </div>
    </div>
  </div>
</div>
