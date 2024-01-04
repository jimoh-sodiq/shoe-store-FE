<script setup lang="ts">
const showMyBag = ref(false);
</script>

<template>
  <div class="px-4 py-10 border-t">
    <main class="max-w-[1400px] mx-auto flex gap-8">
      <section class="w-1/5">Filter section</section>
      <section class="w-4/5">
        <div class="flex items-center justify-between gap-x-3">
          <h1 class="uppercase font-semibold text-xl">Products on sale</h1>
          <GlobalButton text="See Bag" @click="showMyBag = true" />
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
          <ProductItem v-for="n in 20" :key="n" />
        </div>
      </section>
    </main>
    <GlobalSlidingModal
      type="right"
      @close-modal="showMyBag = false"
      v-if="showMyBag"
    >
      <main
        class="fixed right-0 h-full overflow-auto bg-white max-w-[320px] w-[90%] sm:w-[75%] md:w-2/5 lg:w-2/6 lg:max-w-md py-6 px-4"
      >
        <div class="flex items-center justify-between gap-x-4">
          <h1 class="font-semibold">My Bag</h1>
          <Icon
            name="ph:x-circle-bold"
            class="w-6 h-6 cursor-pointer"
            role="button"
            @click="showMyBag = false"
          />
        </div>
      </main>
    </GlobalSlidingModal>
  </div>
</template>
