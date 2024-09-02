<script>
  export let product;
</script>
<div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div
      class="flex items-end justify-end h-56 w-full bg-cover"
      style="background-image: url('{product.img}')"
    ></div>
    <div class="px-5 py-3">
      <h3 class="text-gray-700 uppercase">{product.title}</h3>
      <span class="text-black mt-2">LKR {parseFloat((product.price)).toFixed(2)}</span><br>
      <span class="text-gray-400 mt-2">{product.color} - {product.category}</span>
    </div>
  </div>