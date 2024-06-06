<script setup lang="ts">
const showMyBag = ref(false);
</script>

<template>
  <div class="px-4 pb-10 pt-5 border-t relative">
    <main class="max-w-[1400px] mx-auto flex gap-4">
      <section class="hidden md:block md:w-2/5 lg:w-1/5 border-r border-t rounded-se-lg box- p-1">
        <p class="text-sm text-gray-600 font-medium flex items-center space-x-1">
          <Icon name="ph:funnel-bold" class=" w-4 h-4" />
          <span class="text-gray-700">Filter products</span>
        </p>
      </section>
      <section class="w-full md:3/5 lg:w-4/5">
        <div class="flex items-center justify-between gap-x-3">
          <h1 class="uppercase font-medium text-lg md:text-xl">Products on sale</h1>
          <GlobalButton text="My Bag" @click="showMyBag = true" />
        </div>
        <!-- <div class="grid grid-cols-2 justify-center justify-items-center gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <ProductItem v-for="n in 20" :key="n" />
        </div> -->
        <div class="mt-4 gap-x-2 gap-y-4 sm:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <ProductItem v-for="n in 20" :key="n" class="grow" />
        </div>
      </section>
    </main>
    <GlobalSlidingModal type="right" @close-modal="showMyBag = false" v-if="showMyBag">
      <main
        class="fixed right-0 h-full overflow-auto bg-white max-w-[350px] w-[90%] sm:w-[75%] md:w-2/5 lg:w-2/6 lg:max-w-md pb-6 px-4 space-y-4">
        <div
          class="flex items-center justify-between gap-x-4 bg-white sticky top-0 pt-6 pb-3 border-b border-b-gray-200">
          <h1 class="font-semibold">My Bag</h1>
          <Icon name="ph:x-circle-bold" class="w-6 h-6 cursor-pointer" role="button" @click="showMyBag = false" />
        </div>
        <div class="flex flex-col gap-4">
          <ProductBagItem v-for="product in 20" />
        </div>
      </main>
    </GlobalSlidingModal>
  </div>
</template>
