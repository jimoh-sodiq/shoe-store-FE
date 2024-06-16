<script setup lang="ts">

const route = useRoute()
const router = useRouter()

const profileTabs = ['orders', 'reviews']

const loadingState = reactive({
    loggingOut: false
})

async function handleLogout() {
    loadingState.loggingOut = true
    await useAuthState().logout()
    useToast().success("You have been logged out successfully")
    loadingState.loggingOut = false
}
async function getProfile() {
    await useAuthState().showCurrentUser()
}

const signedInUser = useSignedInUser()

onBeforeMount(() => {
    if (!route.query.tab) {
        router.push({ query: { tab: profileTabs[0] } })
    }
})




</script>

<template>
    <div class="px-4 md:px-6">
        {{ loadingState.loggingOut }}
        <button @click="handleLogout" class="bg-red-500 text-white">Logout</button>
        <button @click="getProfile">Get Profile</button>
        {{ signedInUser }}

        <div class="max-w-[1440px] mx-auto w-full">
            <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ProfileCard class=" bg-red-500 text-gray-200 hover:scale-105">
                    <p class="text-sm text-white font-medium">Total Orders</p>
                    <p class="text-white text-[22px] font-semibold">NO</p>
                    <span class="rounded-full px-2 py-2 text-red-500 text-xs bg-white font-medium inline-block mt-1">
                        All time
                    </span>
                </ProfileCard>
                <ProfileCard class=" bg-green-600 text-gray-200 hover:scale-105">
                    <p class="text-sm text-white font-medium">Money Spent</p>
                    <p class="text-white text-[22px] font-semibold">NO</p>
                    <span class="rounded-full px-2 py-2 text-green-600 text-xs bg-white font-medium inline-block mt-1">
                        All time
                    </span>
                </ProfileCard>
                <ProfileCard class=" bg-orange-500 text-gray-200 hover:scale-105">
                    <p class="text-sm text-white font-medium">Reviews</p>
                    <p class="text-white text-[22px] font-semibold">NO</p>
                    <span class="rounded-full px-2 py-2 text-orange-500 text-xs bg-white font-medium inline-block mt-1">
                        All time
                    </span>
                </ProfileCard>
                <ProfileCard class=" bg-purple-500 text-gray-200 hover:scale-105">
                    <p class="text-sm text-white font-medium">Favourites</p>
                    <p class="text-white text-[22px] font-semibold">NO</p>
                    <span class="rounded-full px-2 py-2 text-purple-500 text-xs bg-white font-medium inline-block mt-1">
                        All time
                    </span>
                </ProfileCard>
                <div>

                </div>

            </section>
            <section>
                <div class="mt-5 flex w-full overflow-x-auto md:mt-6">
                    <NuxtLink v-for="(tab, index) in profileTabs" :key="index" :class="route.query.tab == tab
                            ? 'border-green-700 text-green-700 '
                            : 'border-transparent text-gray-400'
                        " class="font-medium capitalize text-sm whitespace-nowrap border-b-[2px] px-10 py-2.5 transition-all"
                        :to="`/profile?tab=${tab}`">
                        {{ tab }}
                    </NuxtLink>
                </div>
                <div>
                    <div>
                    
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>