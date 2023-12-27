<template>
  <main class="border-t">
    <div
      class="max-w-[1400px] mx-auto p-4 md:p-6 flex items-center justify-center"
    >
      <form @submit.prevent class="max-w-lg w-full mx-auto space-y-4 mt-16">
      <h3 class="text-center font-medium uppercase">Login</h3>
        <GlobalInput label="Email" type="email" />
        <GlobalInput label="password" type="password" />
        <GlobalButton text="Submit" grow />
        <p class="text-center text-sm">Or</p>
        <NuxtLink to="/auth/register" class="uppercase block w-fit mx-auto text-center font-medium text-sm underline">Register</NuxtLink>
        <p class="text-sm text-center">Forgot password? click <NuxtLink to="/auth/forgot-password" class="uppercase font-semibold underline">here</NuxtLink></p>
      </form>
    </div>
  </main>
</template>
