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
  <button :disabled="disabled" class="uppercase mt-5 text-white font-bold bg-black p-3 text-sm rounded-lg" :class="[grow ? 'w-full' : 'w-fit']">
    <Icon
      v-if="showLoadingSpinner && loading && preIcon && iconName"
      :class="iconClass"
      :name="iconName"
    />
    <span class="inline-block ">   {{ text }}</span>

    <Icon
      v-if="showLoadingSpinner && loading && !preIcon && iconName"
      :class="iconClass"
      :name="iconName"
    />
 
  </button>
</template>
