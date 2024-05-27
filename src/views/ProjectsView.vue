<script setup>
import { ref } from 'vue'

let nuxt3IntercomTotalDownloads = ref()
let nuxtI18nDataTotalDownloads = ref()
let nuxtVuetifyNestedContainmentTotalDownloads = ref()
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
fetchNpmDownloads('nuxt-vuetify-nested-containment').then(async response => {
  const data = await response.json()
  nuxtVuetifyNestedContainmentTotalDownloads.value = data.downloads
})
</script>

<template>
  <main>
    <div class="mb-6">
      <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0 p-8 pr-0">
            <img class="w-full object-cover rounded-xl md:w-48" src="@/assets/projects/heiland-logo.png" alt="Heiland">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Full stack developer @Heiland
              GmbH</div>
            <p class="block mt-1 text-lg font-medium text-black dark:text-white">
              I worked here 4 years as a senior full stack developer</p>
            <p class="mt-3 text-gray-500 dark:text-gray-300">
              What else I did
            <ul class="list-disc">
              <li>Lead frontend developer</li>
              <li>Develop new features and new projects in its full stack - VueJs,
                NodeJs, SpringBoot, PostgresSQl, AWS cloud</li>
              <li>Maintain all projects incl. the b2b ecommerce shop</li>
              <li>Maintain the automatic CI / CD process in Bitbucket</li>
              <li>Maintain the AWS services - lamba, beanstalk, api gateway and
                other</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0 p-8 pr-0">
            <img class="w-full object-cover rounded-xl md:w-48" src="@/assets/projects/upljft-logo.png" alt="Upljft">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Full stack developer @upljft GmbH
            </div>
            <p class="block mt-1 text-lg font-medium text-black dark:text-white">
              I worked here for 6 Month as a senior full stack developer</p>
            <p class="mt-3 text-gray-500 dark:text-gray-300">
              What else I did
            <ul class="list-disc">
              <li>Lead full stack developer</li>
              <li>Develop a Rest API, written in Laravel, to generate Yogagraphy
                images by a custom string and send a christmas email to
                customers via Mailchimp</li>
              <li>Introduce a new CI / CD pipelinewith docker in GitLab</li>
              <li>Develop small to big projects for customers. Used Tech stack: Vue
                (Nuxt), PHP (Laravel), AWS, Docker, Gitlab</li>
              <li>Technical contact person for customer projects</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0 p-8 pr-0">
            <img class="w-full object-cover rounded-xl md:w-48" src="@/assets/projects/osp-logo.png" alt="OSP">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Otto group solution provider GmbH
            </div>
            <p class="block mt-1 text-lg font-medium text-black dark:text-white">
              I worked here for 1,5 years as a senior full stack developer</p>
            <p class="mt-3 text-gray-500 dark:text-gray-300">
              What else I did
            <ul class="list-disc">
              <li>Further development of an Android (Java) and an IOS (SWIFT) app</li>
              <li>Develop a Rest API for generating templates by dynamic input and
                sending continuous mass mailings of SMS and emails for a parcel
                service</li>
              <li>Develop a project to manage online training courses
                Technical contact person</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0 p-8 pr-0">
            <img class="w-full object-cover rounded-xl md:w-48" src="@/assets/projects/berenberg-logo.jpeg" alt="OSP">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Education @Berenberg
            </div>
            <p class="block mt-1 text-lg font-medium text-black dark:text-white">
              I made here my 3 years education Computer Science Expert Subject Area: Software Development</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-pink-500 text-center text-xl mb-3">Open source projects</p>
      <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0 p-8 pr-0">
            <img class="w-full object-cover rounded-xl md:w-48" src="@/assets/projects/nuxt-3-intercom.gif"
              alt="Nuxt 3 intercom">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nuxt3 module: nuxt-3-intercom
            </div>
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
      <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0 p-8 pr-0">
            <img class="w-full object-cover rounded-xl md:w-48" src="@/assets/projects/nuxt-18n-data.gif"
              alt="Nuxt i18n data">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nuxt3 module: nuxt-i18n-data
            </div>
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
      <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0 p-8 pr-0">
            <img class="w-full object-cover rounded-xl md:w-48"
              src="@/assets/projects/nuxt-vuetify-nested-containment.gif" alt="Nuxt vuetify nested containment">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nuxt3 module:
              nuxt-vuetify-nested-containment</div>
            <p class="block mt-1 text-lg font-medium text-black dark:text-white">
              A module for nuxt3 that extend vuetify components</p>
            <p class="mt-3 text-gray-500 dark:text-gray-300">This nuxt 3 module provides a client side plugin that add
              This module provides multiple vuetify extended components like a List with nested logic
              <br><br>
              As always this module uses 100% Typescript
            </p>
            <p class="mt-3">
              <a target="_blank" href="https://www.npmjs.com/package/nuxt-vuetify-nested-containment"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                  class="icon-[file-icons--npm] mr-1" style="width: 16px; height: 16px;"></span>
                Npm</a>

              <a target="_blank" href="https://github.com/devonik/nuxt-vuetify-nested-containment"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                  class="icon-[ri--github-fill] mr-1" style="width: 16px; height: 16px;"></span>
                GitHub</a>

            </p>
            <p>
              <span class="font-size: small text-gray-500 dark:text-gray-300">Npm downloads per month: <strong>{{
                  nuxtVuetifyNestedContainmentTotalDownloads
                  }}</strong></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
