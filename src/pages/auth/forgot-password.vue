<script setup lang="ts">
const email = useAuthEmail();

const { execute, data,error, status } = await useCustomFetch<ApiResponse<null>>("/api/v1/auth/forgot-password", {
  immediate: false, server: false, lazy: true, method: "POST", watch: false, body: computed(() => ({ email: email.value }))
})

async function handleForgotPassword(){
  await execute()
  if(error.value){
    useToast().error(error.value.message)
    return
  }
  useToast().success(data.value?.message)
}

</script>

<template>
  <main class="border-t">
    <div class="max-w-[1400px] mx-auto p-4 md:p-6 flex items-center justify-center">
      <form @submit.prevent="handleForgotPassword" class="max-w-lg w-full mx-auto space-y-4 mt-16">
        <h3 class="text-center font-medium uppercase">Forgot Password</h3>
        <GlobalInput label="Enter your email*" type="email" required v-model="email" />
        <GlobalButton :loading="status == 'pending'" text="Submit" grow type="submit" />
        <p class="text-center text-sm">Or</p>
        <NuxtLink to="/auth/register" class="uppercase block w-fit mx-auto text-center font-medium text-sm underline">
          Register</NuxtLink>
        <p class="text-sm text-center">
          A password reset mail will be sent to your provided email address.
        </p>
      </form>
    </div>
  </main>
</template>
