<script setup lang="ts">
defineProps<{
  text: string;
  disabled?: boolean;
  showLoadingSpinner?: boolean;
  iconClass?: string;
  iconName?: string;
  loading?: boolean
  preIcon?: boolean
  grow?: boolean
}>();
</script>

<template>
  <button :disabled="loading || disabled" class="uppercase mt-5 text-white font-bold bg-black hover:bg-black/80 transition-colors p-3 text-sm rounded-lg" :class="[grow ? 'w-full' : 'w-fit']">
    <span v-if="loading" class="inline-block ">loading...</span>
    <span v-else class="inline-block ">   {{ text }}</span>
  </button>
</template>
