<script setup lang="ts">
onBeforeMount(async () => {
  await useAuthState().getUserProfile()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <GlobalToastContainer />
  </NuxtLayout>
</template>
