<template>
  <NuxtLink to="/product/kasfjdfk" class="inline-block shrink-0">
    <div
      class="w-[230px] h-[230px] relative rounded-lg overflow-clip bg-gray-300"
    >
      <NuxtImg
        class="bg-cover w-full h-full"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <!-- tags on image -->
      <div
        class="bg-white rounded-xl w-fit ring-[1.5px] absolute top-3 right-3 ring-gray-400 py-1 px-2.5 text-xs font-semibold space-x-2"
      >
        <span class="inline-block w-3 h-3 rounded-full bg-red-400" />
        <span class="inline-block">Just In</span>
      </div>
      <!-- tags end -->
    </div>
    <p class="line-clamp-1 text-gray-700 mt-2 text-sm font-semibold uppercase">
      Ozmorph shoes
    </p>
    <div class="flex items-center gap-x-1 mt-1.5">
      <div
        class="w-5 h-5 rounded-full bg-blue-600"
        v-for="color in 3"
        :key="color"
      />
    </div>
    <p class="font-bold text-lg mt-1">#5000</p>
  </NuxtLink>
</template>
