<script setup lang="ts">

function logout(){
    useToast().success("good boy")
}
async function getProfile(){
    await useAuthState().getUserProfile()
}


</script>

<template>
    <div>
        <button @click="getProfile">Logout</button>
        {{ useUserProfile }}
    </div>
</template>