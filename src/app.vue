<script setup lang="ts">
onBeforeMount(async () => {
  await useAuthState().showCurrentUser()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <GlobalToastContainer />
  </NuxtLayout>
</template>
