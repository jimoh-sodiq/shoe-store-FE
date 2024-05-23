<script setup lang="ts">
import type { LocationQueryValue } from "vue-router";

const router = useRouter();

const route = useRoute();

const { isLoading, verifyEmailError, verifyEmail } = useAuthState();

onMounted(async () => {
  await verifyEmail(
    route.query.email as LocationQueryValue,
    route.query.token as LocationQueryValue
  );
});
</script>

<template>
  <main class="border-t">
    <div
      class="max-w-[1400px] mx-auto p-4 md:p-6 flex items-center justify-center"
    >
      <div v-if="isLoading" class="max-w-lg w-full mx-auto space-y-4 mt-16">
        <h3 class="text-center font-medium uppercase">Vefifying Email ...</h3>
      </div>
      <div
        v-else-if="verifyEmailError"
        class="max-w-lg w-full mx-auto space-y-4 mt-16"
      >
        <h3 class="text-center font-medium uppercase">
          Oops! Something went wrong during your email verification process,
          please try again or contact support
        </h3>
        <GlobalButton
          @click="router.push('/auth/login')"
          text="Back to Login"
          grow
        />
      </div>
      <div v-else class="max-w-lg w-full mx-auto space-y-4 mt-16">
        <h3 class="text-center font-medium uppercase">
          Your email have been verified successfully. Please proceed to the
          login page
        </h3>
        <GlobalButton @click="router.push('/auth/login')" text="Login" grow />
      </div>
    </div>
  </main>
</template>
