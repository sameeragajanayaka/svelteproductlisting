<script lang="ts">
  import { categoryFilter, priceRangeFilter } from "../../stores";

  export let categories;
  function updateCategory(event) {
    categoryFilter.set(event.target.value);
  }
  function updatePriceRange(index, event) {
    const value = Number(event.target.value);
    priceRangeFilter.update(currentRange => {
      const newRange = [...currentRange];
      newRange[index] = value;
      return newRange;
    });
  }
  
</script>

<div style="w-full">
  <div
    class="box rounded-full border border-gray-300 bg-gray-100 p-6 pb-1 w-full mb-4"
  >
    <div class="grid grid-cols-5 gap-4">
      <div class="col-span-2">
        <div class="flex items-center mb-5 gap-1">
          <p class="px-1 font-medium leading-6 text-black mr-2">Categroy</p>
          <select
            id="category"
            bind:value={$categoryFilter}
            on:change={updateCategory}
            class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
          >
            <option value="">All Categories</option>
            {#each categories as category}
              <option value={category}>{category}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="col-span-2">
        <div class="flex items-center mb-5 gap-1">
          <p class="px-1 font-medium leading-6 text-black mr-2">Price</p>
          <div class="relative w-full">
            <input
              id="FromPrice"
              type="number"
              placeholder="From"
              bind:value={$priceRangeFilter[0]}
              on:input={(e) => updatePriceRange(0, e)}
              class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
            />
          </div>
          <p class="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
          <div class="relative w-full">
            <input
              id="ToPrice"
              type="number"
              placeholder="To"
              bind:value={$priceRangeFilter[1]}
              on:input={(e) => updatePriceRange(1, e)}
              class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
            />
          </div>
        </div>
      </div>

      <div class="">
        <button
          class="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-gray-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-black hover:shadow-indigo-200"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</div>
