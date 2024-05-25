<script setup lang="ts">
// const oldPassword = ref("")
const newPassword = ref("");

const route = useRoute();
const router = useRouter()

const email = computed(() => route.query.email);
const passwordToken = computed(() => route.params.tokenMail);

const { execute, data, error, status } = await useCustomFetch<ApiResponse<null>>(
  "/api/v1/auth/reset-password",
  {
    immediate: false,
    server: false,
    lazy: true,
    method: "POST",
    watch: false,
    body: computed(() => ({
      email: email.value,
      passwordToken: passwordToken.value,
      password: newPassword.value,
    })),
  }
);

async function handleResetPassword() {
  if (!email.value || !passwordToken.value){
    useToast().error("please confirm your reset password link is valid");
    return
  } 
  await execute();
  if (error.value) {
    useToast().error(error.value.message);
    return;
  }
  useToast().success(data.value?.message);
  router.replace("/auth/login")
}
</script>

<template>
  <main class="border-t">
    <div class="max-w-[1400px] mx-auto p-4 md:p-6 flex items-center justify-center">
      <form
        @submit.prevent="handleResetPassword"
        class="max-w-lg w-full mx-auto space-y-4 mt-16"
      >
        <h3 class="text-center font-medium uppercase">Reset Password</h3>
        <!-- <GlobalInput v-model="oldPassword" label="Old Password*" required /> -->
        <GlobalInput v-model="newPassword" label="New Password*" required />
        <GlobalButton :loading="status == 'pending'" text="Submit" grow />
        <p class="text-center text-sm">Or</p>
        <NuxtLink
          to="/auth/login"
          class="uppercase block w-fit mx-auto text-center font-medium text-sm underline"
          >Login
        </NuxtLink>
      </form>
    </div>
  </main>
</template>
