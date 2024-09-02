<script lang="ts">
  
  import Footer from "./component/Footer.svelte";
  import Header from "./component/Header.svelte";
import ProductCard from "./component/ProductCard.svelte";
  let categories = ["Nature", "Animals", "Tech"];
  export let data;
  let productss=data.data;
  let currentPage = 1;
  let allpage = 1;
  let productsPerPage = 10;
  function changePage(page) {
    // if (page >= 1 && page <= totalPages) {
    //   currentPage = page;
    // }
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div>
  <div class="">
    <h1 class="pb-5">Our Products</h1>
    <Header categories={categories}/>
    <div style="display: flex;justify-content: flex-end">
      <select
        class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block py-2.5 px-4 appearance-none relative focus:outline-none bg-gray-200"
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
      {#each productss as product}
        <ProductCard {product} />
      {/each}
    </div>
    <Footer currentPage={currentPage} allpage={allpage}/>
  </div>
</div>
