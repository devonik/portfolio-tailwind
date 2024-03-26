<script setup>
import { ref } from 'vue'

let nuxt3IntercomTotalDownloads = ref()
let nuxtI18nDataTotalDownloads = ref()
function fetchNpmDownloads(packageName, period = 'last-month') {
  try {
    return fetch(`https://api.npmjs.org/downloads/point/${period}/${packageName}`);
  } catch (error) {
    console.error("Could not fetchNpmDownloads for package: " + packageName, error);
  }
}
fetchNpmDownloads('nuxt-3-intercom').then(async response => {
  const data = await response.json()
  nuxt3IntercomTotalDownloads.value = data.downloads
})
fetchNpmDownloads('nuxt-i18n-data').then(async response => {
  const data = await response.json()
  nuxtI18nDataTotalDownloads.value = data.downloads
})
</script>

<template>
  <main>
    <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="w-full object-cover rounded-xl md:w-48" src="@/assets/projects/nuxt-3-intercom.gif" alt="Demo">
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nuxt3 module: nuxt-3-ntercom</div>
          <p class="block mt-1 text-lg font-medium text-black dark:text-white">
            An module to easlily opt-in the intercom js instance. Including lazy loading if needed</p>
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
          <img class="w-full object-cover rounded-xl md:w-48" src="@/assets/projects/nuxt-18n-data.gif" alt="Demo">
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nuxt3 module: nuxt-i18n-data</div>
          <p class="block mt-1 text-lg font-medium text-black dark:text-white">
            A module for nuxt3 to easily provide data for vue-i18n</p>
          <p class="mt-3 text-gray-500 dark:text-gray-300">This nuxt 3 module provides a client side plugin that add
            This nuxt 3 module can be used to load locale messages in the vue-i18n instance. The api configured in the
            config will be called initial after nuxt build and can be called again via plugin that is provided by this
            module - access via $i18nData
            <br><br>
            As always this module uses 100% Typescript
          </p>
          <p class="mt-3">
            <a target="_blank" href="https://www.npmjs.com/package/nuxt-i18n-data"
              class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                class="icon-[file-icons--npm] mr-1" style="width: 16px; height: 16px;"></span>
              Npm</a>

            <a target="_blank" href="https://github.com/devonik/nuxt-i18n-data"
              class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                class="icon-[ri--github-fill] mr-1" style="width: 16px; height: 16px;"></span>
              GitHub</a>

          </p>
          <p>
            <span class="font-size: small text-gray-500 dark:text-gray-300">Npm downloads per month: <strong>{{
                nuxtI18nDataTotalDownloads
                }}</strong></span>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
