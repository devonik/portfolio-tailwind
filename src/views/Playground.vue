<script setup lang="ts">
import { ref } from 'vue'
const choosed = ref()
</script>
<template>
    <div class="h-56">
        <div class="app-bar_playground__image h-4/5"></div>
    </div>
    <main>
        <div class="text-pink-500 text-center text-xl">Voucher for marina
        </div>
        <div v-if="choosed" class=" max-auto text-center p-3 rounded-xl shadow-md m-3">
            <p>You choosed {{ choosed }}!</p>
            <p class="text-red-500">This will be awesome :) I love you!</p>
        </div>
        <div v-else class="flex justify-around flex-col md:flex-row">
            <div @click="() => { choosed = '3 days dive' }"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white p-3 rounded-xl shadow-md m-3">
                <p class="text-lg">Option A: 3 days á 2 max. dives at Orca dive center bali</p>
                <p class="text-sm">
                    Example: 25th Saturday 2 dive, 26th Sunday 2 dives, 27th 1 dive or 2 if possible
                </p>
            </div>
            <div @click="() => { choosed = 'Advanced open water course' }"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white p-3 rounded-xl shadow-md m-3">
                <p class="text-lg">Option B: Advanced open water cource at Orca dive center bali</p>
                <p class="text-sm">
                    Have to ask how this can be scheduled
                </p>
            </div>
        </div>

    </main>
</template>
<style lang="scss">
.app-bar_playground__image {
    background-image: url(./../assets/app-bar-header-voucher.jpg);
    background-position: center center;
    background-size: cover;
    transition: opacity .4s cubic-bezier(.4, 0, .2, 1);
}
</style>