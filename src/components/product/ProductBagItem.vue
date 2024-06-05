<template>
    <div
        class="w-full text-left ups-text-paragraph2-medium flex items-center gap-x-3 p-1 rounded-lg bg-gray-50 border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors line-clamp-1">
        <NuxtLink to="/product/dfsaf">
            <NuxtImg title="View product" loading="lazy"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="inline-block h-[70px] aspect-square overflow-clip rounded-lg bg-gray-200 object-cover" />
        </NuxtLink>
        <div class="flex flex-col grow self-start gap-1">
            <p class="line-clamp-1 text-sm text-gray-600 font-medium">Red Shoe with a long name</p>

            <div class="space-x-2"><span class="text-sm font-semibold text-gray-800">$20.00</span><span
                    class=" italic">x5</span></div>
            <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-1">
                    <button
                        class="w-fit flex items-center justify-center p-1 rounded-[9px] bg-green-600 hover:bg-green-700 transition-all text-white">
                        <Icon name="ph:minus-bold" />
                    </button>
                    <span>80</span>
                    <button
                        class="w-fit flex items-center justify-center p-1 rounded-[9px] bg-green-600 hover:bg-green-700 transition-all text-white">
                        <Icon name="ph:plus-bold" />
                    </button>
                </div>
                <Icon name="ph:trash-duotone" class="text-red-600 w-5 h-5 hover:text-red-700" title="remove shoe" role="button" />
            </div>
        </div>
    </div>
</template>