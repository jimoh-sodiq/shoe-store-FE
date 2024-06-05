<script setup lang="ts">
const showMyBag = ref(false)
</script>

<template>
  <main class="pt-4 pb-16 px-4">
    <div class="mx-auto max-w-[1400px] w-full flex items-center gap-x-4 justify-between">
      <NuxtLink to="/product" class="font-bold flex items-center p-2 gap-x-2 hover:underline transition-all">
        <Icon name="ph:arrow-left" class="w-6 h-8" />View products
      </NuxtLink>
      <GlobalButton text="My bag" @click="showMyBag = true" />
    </div>
    <div class="flex flex-col lg:flex-row gap-6 mx-auto max-w-[1400px] w-full mt-10">
      <section class="w-full lg:w-2/3 grid gap-1 grid-cols-2">
        <NuxtImg v-for="n in 4" :key="n" class="w-full h-full object-cover rounded-lg aspect-square sm:aspect-auto"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </section>
      <section class="w-full md:w-1/2 lg:w-1/3 pt-5">
        <div class="px-2">
          <div class="w-full flex items-center gap-x-2 justify-between gap-y-2 flex-wrap shrink-0">
            <h2 class="font-bold text-4xl">Ozmorph Shoes</h2>
            <div class="flex items-center gap-x-2 shrink-0">
              <Icon name="ph:star-fill" class="text-gray-800 w-5 h-5" v-for="n in 5" :key="n" />
            </div>
          </div>
          <p class="text-gray-500 text-xs font-medium mt-1">Men's original</p>
          <p class="font-semibold text-2xl flex items-center gap-4 mt-1">
            <span class="line-through text-gray-400">#20000</span><span class="text-gray-700">#20000</span>
          </p>
        </div>
        <div class="px-2 py-5 bg-gray-200 flex gap-x-1 mt-2 rounded-lg">
          <Icon name="ph:sparkle" class="w-6 h-6 text-gray-700" />
          <p class="text-sm text-gray-700">
            Popular - Over 128 people have bought this product in the last 24
            hours
          </p>
        </div>
        <div class="mt-2 px-2">
          <h4 class="font-semibold text-gray-700 text-sm">Cyber Monday Sale</h4>
          <p class="text-xs font-medium text-gray-500">
            Score cyber savings with an extra 40% off full price and sale items
            with code CYBER
          </p>
          <NuxtLink to="/product" class="underline text-xs text-gray-500 hover:text-gray-600 transition-colors">Shop
            similar products</NuxtLink>
        </div>
        <div class="text-gray-700 font-semibold mt-5 px-2">
          <h4>3 Colors available</h4>
          <div class="flex items-center gap-x-1 mt-1">
            <div class="w-5 h-5 rounded-full bg-blue-600" v-for="color in 3" :key="color" />
          </div>
        </div>

        <div class="px-2 mt-5">
          <div class="flex items-center gap-x-2 justify-between text-sm font-medium text-gray-500">
            <span class="inline-block text-gray-600 font-semibold">Sizes</span>
            <button class="underline text-xs">Size Guide</button>
          </div>
          <div class="mt-3 flex items-center gap-2 flex-wrap">
            <div v-for="n in 20" :key="n"
              class="text-sm font-medium rounded-md ring-gray-200 shadow ring-[2px] flex items-center justify-center shrink-0 px-4 py-2 w-fit h-fit">
              5
            </div>
          </div>
          <div class="mt-5">
            <GlobalButton text="ADD TO BAG" grow />
          </div>
        </div>
      </section>
    </div>
    <div class="mx-auto max-w-[1400px] w-full mt-16">
      <div>
        <h2 class="font-semibold text-xl">Description</h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          laboriosam laudantium iure commodi atque facere aliquam culpa in
          corrupti corporis porro, eveniet nisi. Facere voluptatibus aut nihil
          tempora quo labore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Excepturi exercitationem ea, incidunt vero sit dicta quia harum
          omnis voluptatum amet atque culpa cumque suscipit asperiores rem fuga
          accusantium, sed quam?
        </p>
      </div>
      <div>
        <h2 class="font-semibold text-xl mt-10">Reviews</h2>
        <ul class="space-y-4 mt-3">
          <l1>
            <Icon name="ph:star-fill" class="text-gray-800 w-4 h-4" v-for="n in 5" :key="n" />
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              facilis ex. Porro, nostrum, repudiandae illum ducimus saepe
              laborum omnis cumque quisquam repellat molestias nobis harum
              corrupti excepturi laboriosam placeat dolorum?
            </p>
            <p class="font-bold text-sm uppercase">Jimoh Sodiq</p>
          </l1>
        </ul>
      </div>
    </div>
    <GlobalSlidingModal type="right" @close-modal="showMyBag = false" v-if="showMyBag">
      <main
        class="fixed right-0 h-full overflow-auto bg-white max-w-[350px] w-[90%] sm:w-[75%] md:w-2/5 lg:w-2/6 lg:max-w-md pb-6 px-4 space-y-4">
        <div class="flex items-center justify-between gap-x-4 bg-white sticky top-0 pt-6 pb-3 border-b border-b-gray-200">
          <h1 class="font-semibold">My Bag</h1>
          <Icon name="ph:x-circle-bold" class="w-6 h-6 cursor-pointer" role="button" @click="showMyBag = false" />
        </div>
        <div class="flex flex-col gap-4">
          <ProductBagItem v-for="product in 20" />
        </div>
      </main>
    </GlobalSlidingModal>
  </main>
</template>
