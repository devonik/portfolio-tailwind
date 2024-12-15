<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div>
    <div class="app-bar__image h-4/5"></div>
    <!-- Our link container -->
    <div class="mt-2 flex h-1/5 items-center justify-center space-x-2 text-2xl">
      <RouterLink
        to="/about"
        class="inline-flex items-center rounded-lg border border-indigo-500 p-2.5 text-center text-sm font-medium text-indigo-500 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        :class="{ 'bg-indigo-500 text-white': router.currentRoute.value.path === '/about' }"
        as="a"
      >
        <div>About</div>
      </RouterLink>
      <RouterLink
        to="/projects"
        class="inline-flex items-center rounded-lg border border-indigo-500 p-2.5 text-center text-sm font-medium text-indigo-500 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        :class="{ 'bg-indigo-500 text-white': router.currentRoute.value.path === '/projects' }"
        as="a"
      >
        <div>Projects</div>
      </RouterLink>
    </div>
  </div>
</template>
<style lang="scss">
.app-bar__image {
  background-image: linear-gradient(to right top, rgb(1, 87, 155), rgba(25, 32, 72, 0.7)),
    url(./../../assets/app-bar-image.avif);
  background-position: center center;
  background-size: cover;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
