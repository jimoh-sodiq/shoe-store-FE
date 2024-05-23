<template>
  <output
    class="mb-2 flex w-full items-center justify-between gap-x-3 rounded-[15px] py-5 pl-4 pr-2 ring-[1px] md:gap-x-6 md:pl-8 md:pr-4"
    :class="toastContainerClass"
  >
    <div class="flex flex-col">
      <p class="font-bold first-letter:capitalize">{{ toast.title }}</p>
      <p v-if="toast.description" class="text-sm">{{ toast.description }}</p>
    </div>
    <button v-if="toast.showClose" class="rounded-[9px] p-2" :class="closeButtonClass" @click="removeToast(toast.id)">
      <Icon name="ph:x" class="h-4 w-4 shrink-0 text-inherit" />
    </button>
  </output>
</template>

<script setup lang="ts">

const { removeToast } = useToast()

const props = defineProps({
  toast: {
    type: Object as PropType<IToast>,
    required: true,
  },
})

const toast = props.toast

const timeout = setTimeout(() => {
  removeToast(toast.id)
}, toast.duration)

const toastContainerClass = [
  {
    "bg-[#D1EEDB] ring-[#5EC37F] text-[#307F4A]": toast.type === "success",
  },
  { "bg-[#FEE4E2] ring-[#F97066] text-[#CF3131]": toast.type === "error" },
  { "bg-[#D1E9FF] ring-[#53B1FD] text-[#175CD3]": toast.type === "info" },
  {
    "bg-[#FEF4E5] ring-[#FAAF59] text-[#E27D42]": toast.type === "warning",
  },
]

const closeButtonClass = [
  { "bg-[#E8F6ED] text-[#307F4A]": toast.type === "success" },
  { "bg-[#FEF3F2] text-[#CF3131]": toast.type === "error" },
  { "bg-[#EFF8FF]  text-[#175CD3]": toast.type === "info" },
  { "bg-[#FDE2BF] text-[#EA8A45]": toast.type === "warning" },
]

onBeforeUnmount(() => {
  clearTimeout(timeout)
})
</script>

<style lang="scss">
.toast {
  --toast-accent-clr: "";
  background-color: #fff;
  border: 1px solid #eee;
  border-left: 4px solid var(--toast-accent-clr);
  @apply mb-2 flex items-center px-4 py-3;

  &.success {
    --toast-accent-clr: #47d764;
  }

  &.info {
    --toast-accent-clr: #2f86eb;
  }

  &.warning {
    --toast-accent-clr: #ffc021;
  }

  &.error {
    --toast-accent-clr: #e60023;
  }

  &__icon {
    @apply flex h-8 w-8 items-center justify-center rounded-full text-white;
    background-color: var(--toast-accent-clr);
  }

  &__text {
    @apply mx-3;

    @media screen and (max-width: 600px) {
      @apply w-4/5;
    }
  }

  &__title {
    @apply text-base font-medium capitalize text-gray-700;
    color: var(--toast-accent-clr);
  }

  &__message {
    @apply text-sm text-gray-400;
  }

  button {
    @apply text-lg text-gray-300;
  }
}
</style>
