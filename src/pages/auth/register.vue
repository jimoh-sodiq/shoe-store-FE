<script setup lang="ts">
const name = ref("");
const email = useAuthEmail();
const password = ref("");
const confirmPassword = ref("");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const { register, isLoading } = useAuthState();
function handleRegister(){
  if(password.value != confirmPassword.value){
    useToast().error("Your password and confirm password does not match")
    return
  }
  if(!passwordRegex.test(password.value)){
    useToast().error("Your password must be 8 characters or more, and includes at least one number and uppercase letter")
    return
  }
  register(name.value, email.value, password.value)
}
</script>

<template>
  <main class="border-t">
    <div
      class="max-w-[1400px] mx-auto p-4 md:p-6 flex items-center justify-center"
    >
      <form
        @submit.prevent="handleRegister"
        class="max-w-lg w-full mx-auto space-y-4 mt-16"
      >
        <h3 class="text-center font-medium uppercase">Register</h3>
        <GlobalInput required label="Name*" v-model="name" />
        <GlobalInput required label="Email*" type="email" v-model="email" />
        <GlobalInput
          required
          label="password* (min. of 8)"
          type="password"
          v-model="password"
        />
        <GlobalInput
          required
          label="confirm password*"
          type="password"
          v-model="confirmPassword"
        />
        <GlobalButton :loading="isLoading" text="Submit" grow type="submit" />
        <p class="text-center text-sm">Or</p>
        <NuxtLink
          to="/auth/login"
          class="uppercase block w-fit mx-auto text-center font-medium text-sm underline"
          >Login</NuxtLink
        >
        <p class="text-sm text-center">
          Forgot password? click
          <NuxtLink
            to="/auth/forgot-password"
            class="uppercase font-semibold underline"
            >here</NuxtLink
          >
        </p>
      </form>
    </div>
  </main>
</template>
