<template>
  <main class="py-10 px-4">
    <div class="flex flex-col lg:flex-row gap-6 mx-auto max-w-[1400px] w-full">
      <section class="w-full lg:w-2/3 grid gap-1 grid-cols-2">
        <NuxtImg
          v-for="n in 4"
          :key="n"
          class="w-full h-full bg-cover rounded-lg"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </section>
      <section class="w-full md:w-1/2 lg:w-1/3 pt-5">
        <div class="px-2">
          <div
            class="w-full flex items-center gap-x-2 justify-between gap-y-2 flex-wrap shrink-0"
          >
            <h2 class="font-bold text-4xl">Ozmorph Shoes</h2>
            <div class="flex items-center gap-x-2 shrink-0">
              <Icon
                name="ph:star-fill"
                class="text-gray-800 w-5 h-5"
                v-for="n in 5"
                :key="n"
              />
            </div>
          </div>
          <p class="text-gray-500 text-xs font-medium mt-1">Men's original</p>
          <p class="font-semibold text-2xl flex items-center gap-4 mt-1">
            <span class="line-through text-gray-400">#20000</span
            ><span class="text-gray-700">#20000</span>
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
          <NuxtLink
            to="/product"
            class="underline text-xs text-gray-500 hover:text-gray-600 transition-colors"
            >Shop similar products</NuxtLink
          >
        </div>
        <div class="text-gray-700 font-semibold mt-5 px-2">
          <h4>3 Colors available</h4>
          <div class="flex items-center gap-x-1 mt-1">
            <div
              class="w-5 h-5 rounded-full bg-blue-600"
              v-for="color in 3"
              :key="color"
            />
          </div>
        </div>

        <div class="px-2 mt-5">
          <div
            class="flex items-center gap-x-2 justify-between text-sm font-medium text-gray-500"
          >
            <span class="inline-block text-gray-600 font-semibold">Sizes</span>
            <button class="underline text-xs">Size Guide</button>
          </div>
          <div class="mt-3 flex items-center gap-2 flex-wrap">
            <div
              v-for="n in 20"
              :key="n"
              class="text-sm font-medium rounded-md ring-gray-200 shadow ring-[2px] flex items-center justify-center shrink-0 px-4 py-2 w-fit h-fit"
            >
              5
            </div>
          </div>
          <div>
            <GlobalButton text="ADD TO BAG" grow />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
