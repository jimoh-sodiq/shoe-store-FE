<script setup lang="ts">

const loadingState = reactive({
    loggingOut: false
})

async function handleLogout(){
    loadingState.loggingOut = true
    await useAuthState().logout()
    useToast().success("You have been logged out successfully")
    loadingState.loggingOut = false
}
async function getProfile(){
    await useAuthState().showCurrentUser()
}

const signedInUser = useSignedInUser()




</script>

<template>
    <div class="flex flex-col">
    {{ loadingState.loggingOut }}
        <button @click="handleLogout">Logout</button>
        <button @click="getProfile">Get Profile</button>
        {{ signedInUser }}
    </div>
</template>