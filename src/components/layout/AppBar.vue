<template>
    <div class="h-56">
        <div class="app-bar__image h-4/5"></div>
        <!-- Our link container -->
        <div class="flex text-2xl space-x-2 mt-2 h-1/5 justify-center items-center">
            <RouterLink to="/about"
                class="text-gray-500 dark:text-gray-300  hover:bg-indigo-500 hover:text-white p-2 rounded-sm"
                :class="{ 'border-b-4 border-b-yellow-900': router.currentRoute.value.path === '/about' }" as="a">
                <div>
                    About
                </div>
            </RouterLink>
            <RouterLink to="/projects"
                class="text-gray-500 dark:text-gray-300  hover:bg-indigo-500 hover:text-white p-2 rounded-sm"
                :class="{ 'border-b-4 border-b-yellow-900': router.currentRoute.value.path === '/projects' }" as="a">
                <div>
                    Projects
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router';

const enabled = ref(false)
const router = useRouter()
</script>
<style lang="scss">
.app-bar__image {
    background-image: linear-gradient(to right top, rgb(1, 87, 155), rgba(25, 32, 72, 0.7)), url(./../../assets/app-bar-image.avif);
    background-position: center center;
    background-size: cover;
    transition: opacity .4s cubic-bezier(.4, 0, .2, 1);
}
</style>