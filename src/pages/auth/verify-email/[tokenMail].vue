<script setup lang="ts">
const router = useRouter()

</script>

<template>
  <main class="border-t">
    <div
      class="max-w-[1400px] mx-auto p-4 md:p-6 flex items-center justify-center"
    >
      <div class="max-w-lg w-full mx-auto space-y-4 mt-16">
        <h3 class="text-center font-medium uppercase">Your email have been verified successfully. Please proceed to the login page</h3>
        <GlobalButton @click="router.push('/auth/login')" text="Login" grow />
      </div>
    </div>
  </main>
</template>
