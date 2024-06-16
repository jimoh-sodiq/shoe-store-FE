<template>
	<div class="rounded-xl relative p-4 transition-transform duration-300">
		<slot />
		<img src="../../assets/images/cardBg.svg" alt="card background" aria-hidden="true" class="absolute inset-0 w-full h-full pointer-events-none object-cover" />
	</div>
</template>
