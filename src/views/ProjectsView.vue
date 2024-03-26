<script setup>
import { ref } from 'vue'

let nuxt3IntercomTotalDownloads = ref()
async function fetchNpmDownloads(packageName, period = 'last-month') {
  try {
    const response = await fetch(`https://api.npmjs.org/downloads/point/${period}/${packageName}`);
    const data = await response.json();
    nuxt3IntercomTotalDownloads.value = data.downloads
  } catch (error) {
    console.error("Could not fetchNpmDownloads for package: " + packageName, error);
  }
}
fetchNpmDownloads('nuxt-3-intercom')
</script>

<template>
  <main>
    <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="w-full object-cover rounded-xl md:w-48" src="@/assets/projects/nuxt-3-intercom.gif" alt="Demo">
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nuxt 3 Intercom</div>
          <p class="block mt-1 text-lg font-medium text-black dark:text-white">
            A nuxt 3 module</p>
          <p class="mt-3 text-gray-500 dark:text-gray-300">This nuxt 3 module provides a client side plugin that add
            intercom to window and provides $intercom instance so you can easily access intercom function like update
            user properties.
            <br><br>
            As always this module uses 100% Typescript
          </p>
          <p class="mt-3">
            <a target="_blank" href="https://www.npmjs.com/package/nuxt-3-intercom"
              class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                class="icon-[file-icons--npm] mr-1" style="width: 16px; height: 16px;"></span>
              Npm</a>

            <a target="_blank" href="https://github.com/devonik/nuxt-3-intercom"
              class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                class="icon-[ri--github-fill] mr-1" style="width: 16px; height: 16px;"></span>
              GitHub</a>

          </p>
          <p>
            <span class="font-size: small text-gray-500 dark:text-gray-300">Npm downloads per month: <strong>{{
              nuxt3IntercomTotalDownloads
                }}</strong></span>
          </p>
        </div>
      </div>
    </div>
    <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-48 w-full object-cover rounded-xl md:w-48" src="@/assets/profile.avif" alt="It's just me">
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Project 2</div>
        </div>
      </div>
    </div>
  </main>
</template>
