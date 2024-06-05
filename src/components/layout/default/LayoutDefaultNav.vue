<script setup lang="ts">
const router = useRouter();
const searchString = ref("");
const debouncedSearchString = refDebounced(searchString, 500);

const searchDivRef = ref(null);

onClickOutside(searchDivRef, () => resetSearchString());

const signedInUser = useSignedInUser()

function resetSearchString(){
  searchString.value = ""
}

</script>

<template>
  <nav class="p-4 md:p-6 h-20 sticky top-0 bg-white z-50  shadow-sm shadow-gray-100">
    <div class="max-w-[1400px] mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <div class="flex items-center gap-x-1 select-none">
          <Icon name="tabler:3d-cube-sphere" class="w-10 h-10" />
          <p class="font-medium text-sm uppercase">J-shoes</p>
        </div>
      </NuxtLink>
      <div class="hidden md:flex items-center gap-x-8 w-full max-w-[400px]">
        <div class="relative w-full" ref="searchDivRef">
          <label :class="searchString
              ? 'rounded-t-xl bg-white border-t border-x border-gray-300'
              : 'rounded-xl bg-[#F2F4F5]'
            " class="px-4 py-2.5 w-full flex items-center gap-x-4">
            <Icon name="ph:magnifying-glass" class="cursor-pointer" />
            <input v-model.trim="searchString" type="search" placeholder="Search products"
              class="flex-auto text-gray-600 bg-transparent outline-none text-sm" />
          </label>
          <div v-if="searchString"
            class="absolute bg-white rounded-b-xl w-full border-t-[1px] border border-gray-300 p-2.5">
            <p class="jfont-label-normal text-text-secondary">
              Top search results:
            </p>
            <div class="mt-2">
              <p class="text-center py-5 text-text-secondary jfont-label-normal">
                searching...
              </p>
              <template>
                <div class="w-full mt-4">Small Error</div>
              </template>
              <p class="text-center py-5 text-text-secondary jfont-label-medium">
                No product found for your search
              </p>

              <div>
                <ul class="space-y-1.5">
                  <li class="line-clamp-1 w-full" v-for="n in 5">
                      <NuxtLink
                        @click="resetSearchString"
                        to="/product/dfsaf"
                        class="w-full text-left ups-text-paragraph2-medium flex items-center gap-x-3 p-1 rounded-lg bg-gray-50 border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors line-clamp-1">
                        <NuxtImg
                          loading="lazy"
                          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          class="inline-block h-9 w-9 overflow-clip rounded-lg bg-gray-200 object-cover"
                        />
                        <div v-if="false" class="w-fit p-1.5 border rounded-lg bg-white">
                          <Icon name="ph:magnifying-glass" class="w-5 h-4 text-text-secondary" />
                        </div>
                        <span class="line-clamp-1 text-sm text-gray-600 font-medium">Red Shoe</span>
                      </NuxtLink>
                    </li>
                </ul>
                <div class="mt-2">
                 <NuxtLink href="/product" @click="resetSearchString"><GlobalButton text="view all products" grow /></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="flex items-center gap-x-2.5">
        <div>
          <NuxtLink v-if="signedInUser" to="/profile" title="account" class="font-medium underline underline-offset-2 text-green-600">
           {{ signedInUser.name }}
          </NuxtLink>
          <NuxtLink v-else  to="/auth/login" title="account">
            <Icon name="ri:account-circle-line" class="w-6 h-6" />
          </NuxtLink>
        </div>
        <NuxtLink to="/checkout" title="bag" class="relative">
          <Icon name="ri:shopping-bag-2-line" class="w-6 h-6" />
        </NuxtLink>
      </section>
    </div>
  </nav>
</template>
