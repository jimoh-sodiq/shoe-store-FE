<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const emit = defineEmits<{
  (event: "closeModal"): void;
}>();

onMounted(() => {
  document!.body.style.overflow = "hidden";
});
onUnmounted(() => (document!.body.style.overflow = "auto"));

const props = withDefaults(
  defineProps<{
    type?: "left" | "right";
    backgroundClose?: boolean;
    mode?: "out-in" | "in-out";
    modalBackgroundClass?: string;
  }>(),
  {
    type: "left",
    backgroundClose: true,
    mode: "out-in",
    modalBackgroundClass: "",
  }
);

const defaultModalBackgroundClass = computed(() =>
  twMerge(
    "fixed inset-0 h-full bg-black/30 z-[890]",
    props.modalBackgroundClass
  )
);

function handleBackgroundClick() {
  if (props.backgroundClose) emit("closeModal");
  return;
}
</script>

<template>
  <teleport to="#modalroot">
    <transition :name="type" :mode="mode" appear>
      <div
        :class="defaultModalBackgroundClass"
        @click.self.exact="handleBackgroundClick"
      >
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
/* left slide transition  */

.left-enter-from,
.left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  width: 0;
}

.left-enter-active,
.left-leave-active {
  transition: all 0.3s ease;
}

/* right slide transition */

.right-enter-from,
.right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.right-enter-active,
.right-leave-active {
  transition: all 0.3s ease-in;
}
</style>
