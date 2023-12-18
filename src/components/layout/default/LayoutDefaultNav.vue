<script setup lang="ts">

const router = useRouter()
const searchString = ref("");
const debouncedSearchString = refDebounced(searchString, 500);

const searchDivRef = ref(null);

onClickOutside(searchDivRef, () => (searchString.value = ""));

function handleAuthRoute(){
  router.push('/auth/login')
}

</script>

<template>
  <nav class="p-4 md:p-6 h-20 sticky top-0 bg-white">
    <div class="max-w-[1400px] mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <div>Logo</div>
      </NuxtLink>
      <div class="flex items-center gap-x-8 font-medium ml-[320px]">
        <NuxtLink>MEN</NuxtLink>
        <NuxtLink>WOMEN</NuxtLink>
        <NuxtLink>KIDS</NuxtLink>
        <NuxtLink>UNISEX</NuxtLink>
      </div>
      <section class="flex items-center gap-x-2.5">
        <div class="relative" ref="searchDivRef">
          <label
            :class="
              searchString
                ? 'rounded-t-xl bg-white border-t border-x border-gray-300'
                : 'rounded-xl bg-[#F2F4F5]'
            "
            class="px-4 py-2.5 w-full flex items-center gap-x-4"
          >
            <Icon name="ph:magnifying-glass" class="cursor-pointer" />
            <input
              v-model.trim="searchString"
              type="search"
              placeholder="Search products"
              class="flex-auto text-gray-600 bg-transparent outline-none text-sm"
            />
          </label>
          <div
            v-if="searchString"
            class="absolute bg-white rounded-b-xl w-full border-t-[1px] border border-gray-300 p-2.5"
          >
            <p class="ups-font-label-semibold text-text-secondary">
              search results:
            </p>
            <div class="mt-2">
              <p
                class="text-center py-5 text-text-secondary ups-font-label-semibold"
              >
                searching...
              </p>
              <template>
                <div class="w-full mt-4">Small Error</div>
              </template>
              <p
                class="text-center py-5 text-text-secondary ups-font-label-semibold"
              >
                No product found for your search
              </p>

              <div>
                <ul>
                  <template>
                    <li class="line-clamp-1 w-full">
                      <NuxtLink
                        class="w-full text-left ups-text-paragraph2-medium flex items-center gap-x-3 p-1 rounded-lg hover:bg-gray-100 transition-colors line-clamp-1"
                      >
                        <span>img</span>
                        <div class="w-fit p-1.5 border rounded-lg bg-white">
                          <Icon
                            name="ph:magnifying-glass"
                            class="w-5 h-4 text-text-secondary"
                          />
                        </div>
                        <span class="line-clamp-1">product net</span>
                      </NuxtLink>
                    </li>
                  </template>
                </ul>
                <div class="mt-2">
                  <button>asdfdasdf</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/auth/login" @click="handleAuthRoute" title="account"><Icon name="ri:account-circle-line" class="w-6 h-6" /></NuxtLink>
        <NuxtLink to="/checkout" title="bag" class="relative">
          <Icon name="ri:shopping-bag-2-line" class="w-6 h-6" />
        </NuxtLink>
      </section>
    </div>
  </nav>
</template>
