<script lang="ts">
  export let currentPage;
  export let totalPages;
  export let onPageChange;
  function handlePrevious() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }
</script>
<div class="w-full center mt-10">
    <div class="flex items-center gap-8" style="justify-content: center;">
      <button
      disabled={currentPage === 1}
        class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        on:click={() => handlePrevious()} 
      >
        <span
          class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
        </span>
      </button>
      <p
        class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700"
      >
        Page <strong class="text-gray-900">{currentPage}</strong> of
        <strong class="text-gray-900">{totalPages}</strong>
      </p>
      <button
      disabled={currentPage === totalPages}
        class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        on:click={() => handleNext()} 
      >
        <span
          class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  </div>