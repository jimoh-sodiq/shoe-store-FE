<template>
  <main class="border-t">
    <div
      class="max-w-[1400px] mx-auto p-4 md:p-6 flex items-center justify-center"
    >
      <form @submit.prevent class="max-w-lg w-full mx-auto space-y-4 mt-16">
        <h3 class="text-center font-medium uppercase">Reset Password</h3>
        <GlobalInput label="Old Password*" required />
        <GlobalInput label="New Password*" required />
        <GlobalButton text="Submit" grow />
        <p class="text-center text-sm">Or</p>
        <NuxtLink
          to="/auth/login"
          class="uppercase block w-fit mx-auto text-center font-medium text-sm underline"
          >Login</NuxtLink
        >
      </form>
    </div>
  </main>
</template>
