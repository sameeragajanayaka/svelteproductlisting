<script lang="ts">
  import { onMount } from 'svelte';
  import {
    categoryFilter,
    priceRangeFilter,
    sortBy,
    sortOrder,
  } from "../stores";
  import { get } from "svelte/store";
  import Footer from "./component/Footer.svelte";
  import Header from "./component/Header.svelte";
  import ProductCard from "./component/ProductCard.svelte";
  let categories = ["Shoes", "Bag", "Watch"];
  export let data;
  let products = data.data;
  let currentPage = 1;
  let productsPerPage = 8;
  $: filteredProducts = products.filter((product) => {
    const titleMatches =
      !get(categoryFilter) ||
      product.category.toLowerCase().includes(get(categoryFilter).toLowerCase());
    const priceMatches =
      product.price >= get(priceRangeFilter)[0] &&
      product.price <= get(priceRangeFilter)[1];
    return titleMatches && priceMatches;
  });
  $: sortedProducts = [...filteredProducts].sort((a, b) => {
    if ($sortBy === 'name') {
      return $sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else {
      return $sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    }
  });
  $: totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  $: paginatedProducts = sortedProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

   function handlePageChange(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }
  function handleSelectionChange(event) {
    categoryFilter.set(event.target.value);
  }
  
  function handleInputMin(event) {
    localStorage.setItem('inputValueMin', event.target.value);
    priceRangeFilter.set([event.target.value, (get(priceRangeFilter)[1])]);
  }
  function handleInputMax(event) {
    priceRangeFilter.set([(get(priceRangeFilter)[0]),event.target.value]);
  }
  function updateProducts() {
    // Filter products based on current store values
    filteredProducts = products.filter((product) => {
      const categoryMatches = !get(categoryFilter) ||
        product.category.toLowerCase().includes(get(categoryFilter).toLowerCase());
      const priceMatches = product.price >= get(priceRangeFilter)[0] && 
        product.price <= get(priceRangeFilter)[1];
      return categoryMatches && priceMatches;
    });

    // Sort products based on current store values
    sortedProducts = [...filteredProducts].sort((a, b) => {
      if (get(sortBy) === 'name') {
        return get(sortOrder) === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      } else {
        return get(sortOrder) === 'asc' ? a.price - b.price : b.price - a.price;
      }
    });

    // Paginate products
    totalPages = Math.ceil(sortedProducts.length / productsPerPage);
    paginatedProducts = sortedProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  }
  function applyFilters() {
    updateProducts();
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div>
  <div class="">
    <h1 class="pb-5">Our Products</h1>
   <Header categories={categories} handleSelectionChange={handleSelectionChange} handleInputMin={handleInputMin} handleInputMax={handleInputMax} handleapply={applyFilters}/>
    <div style="display: flex;justify-content: flex-end">
      <select
        bind:value={$sortBy}
        class="h-10 border mr-1 border-gray-300 text-gray-900 text-xs font-medium rounded-full block py-2.5 px-4 appearance-none relative focus:outline-none bg-gray-200"
      >
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
      <select
        bind:value={$sortOrder}
        class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block py-2.5 px-4 appearance-none relative focus:outline-none bg-gray-200"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>

    <div
      class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
    >
      {#each paginatedProducts as product}
        <ProductCard {product} />
      {/each}
    </div>
    <Footer currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
  </div>
</div>
