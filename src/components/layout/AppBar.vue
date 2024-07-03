<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router';

const enabled = ref(false)
const router = useRouter()
</script>
<template>
    <div class="h-56">
        <div class="app-bar__image h-4/5"></div>
        <!-- Our link container -->
        <div class="flex text-2xl space-x-2 mt-2 h-1/5 justify-center items-center">
            <RouterLink to="/about"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                :class="{ 'bg-indigo-500 text-white': router.currentRoute.value.path === '/about' }" as="a">
                <div>
                    About
                </div>
            </RouterLink>
            <RouterLink to="/projects"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                :class="{ 'bg-indigo-500 text-white': router.currentRoute.value.path === '/projects' }" as="a">
                <div>
                    Projects
                </div>
            </RouterLink>
        </div>
    </div>
</template>
<style lang="scss">
.app-bar__image {
    background-image: linear-gradient(to right top, rgb(1, 87, 155), rgba(25, 32, 72, 0.7)), url(./../../assets/app-bar-image.avif);
    background-position: center center;
    background-size: cover;
    transition: opacity .4s cubic-bezier(.4, 0, .2, 1);
}
</style>