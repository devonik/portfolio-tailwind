<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import PopupModal from '@/components/PopupModal.vue'
import ProjectReferenceItem from '@/components/project/ProjectReferenceItem.vue'

useHead({
  title: 'Project history',
  meta: [
    {
      name: 'description',
      content: "Here you can find my last projects",
    },
  ],
})

let nuxt3IntercomTotalDownloads = ref()
let nuxtI18nDataTotalDownloads = ref()
let nuxtVuetifyNestedContainmentTotalDownloads = ref()
function fetchNpmDownloads(packageName: string, period = 'last-month') {
  try {
    return fetch(`https://api.npmjs.org/downloads/point/${period}/${packageName}`);
  } catch (error) {
    console.error("Could not fetchNpmDownloads for package: " + packageName, error);
  }
}
fetchNpmDownloads('nuxt-3-intercom')?.then(async response => {
  const data = await response.json()
  nuxt3IntercomTotalDownloads.value = data.downloads
})
fetchNpmDownloads('nuxt-i18n-data')?.then(async response => {
  const data = await response.json()
  nuxtI18nDataTotalDownloads.value = data.downloads
})
fetchNpmDownloads('nuxt-vuetify-nested-containment')?.then(async response => {
  const data = await response.json()
  nuxtVuetifyNestedContainmentTotalDownloads.value = data.downloads
})

const yogagraphyModel = ref({
  type: 'img',
  name: '',
  isLoading: false,
  resolutionHeight: 50
})
const yogagraphyApiResponse = ref()
const yogagraphyResultModalVisible = ref(false)
function onYogagraphySubmit() {
  yogagraphyModel.value.isLoading = true
  try {
    fetch(`https://laravel-api.devnik.dev/api/yogagraphy/getImageByForm/`, { method: 'post', headers: { "Content-Type": "application/json" }, body: JSON.stringify(yogagraphyModel.value) })
      .then(async response => {
        yogagraphyApiResponse.value = await response.json()

        yogagraphyResultModalVisible.value = true
      })
      .catch(function (error) {
        yogagraphyApiResponse.value = error
      })
      .finally(() => {
        yogagraphyModel.value.isLoading = false
      });
  } catch (error) {
    console.error("Could not fetch yogagraphy form laravel-api: ", error);
  }

}
</script>

<template>
  <main>
    <div class="flex md:flex-row flex-col">
      <div class="max-w-md mx-auto">
        <h3 class="text-2xl text-center my-6">Project references</h3>
        <ProjectReferenceItem>
          <template #header>
            <img class="mx-auto object-cover md:rounded-xl max-h-80"
              src="@/assets/projects/project-pongmaster-sign-up.gif" alt="Pongmaster refactor sign up flow">
          </template>
          <template #title>
            Pongmaster App sign up flow
          </template>
          <template #text>
            In this project I redesigned the sign up flow in a React Native App. The biggest feature was a background
            video at the start screen
          </template>
          <template #tech>
            <span class="icon-[tabler--brand-react-native] mr-3" title="VueJs"
              style="width: 32px; height: 32px;"></span>
          </template>
        </ProjectReferenceItem>
        <ProjectReferenceItem>
          <template #header>
            <img class="mx-auto object-cover md:rounded-xl px-6" src="@/assets/projects/project-heiland-termine.gif"
              alt="Vet appointment booking tool">
          </template>
          <template #title>
            Online appointment tool for vets
            and pet owners
          </template>
          <template #subtitle>
            With this project a customer (vet) can have his individual appointment booking tool for their customers
            (pet owners).
          </template>
          <template #text>
            The vet get a individual link he can publish on his website, google maps etc. so the pet
            owner can book a appointment online. The pet owner can cancel the appointment, gets an appoval email and a
            reminder email one day before the appointment. The vet gets an email and the appointment is added to his
            calendar (another project). <br> This project is written in VueJs, Nuxt, NodeJs and hosted in AWS. For the
            email reminder I use AWS step functions as a queue
          </template>
          <template #tech>
            <span class="icon-[devicon--vuejs] mr-3" title="VueJs" style="width: 32px; height: 32px;"></span>
            <span class="icon-[logos--nuxt-icon] mr-3" title="NuxtJs" style="width: 32px; height: 32px;"></span>
            <span class="icon-[logos--nodejs] mr-3" title="NuxtJs" style="width: 32px; height: 32px;"></span>
            <span class="icon-[logos--aws] mr-3" title="AWS" style="width: 32px; height: 32px;"></span>
          </template>
        </ProjectReferenceItem>
        <ProjectReferenceItem github-link="https://github.com/devonik/laravel-api">
          <template #header>
            <img class="mx-auto object-cover md:rounded-xl px-6" src="@/assets/projects/yogagraphy-logo.png"
              alt="Yogagraphy">
          </template>
          <template #title>
            Yogagraphy
          </template>
          <template #subtitle>
            A christmas project to generate christmas cards with a individual yogagraphy and send them as bulk
            emails via mailchimp.
            <div class="my-3 text-gray-500 dark:text-gray-300">
              <form @submit.prevent="onYogagraphySubmit">
                <div class="mb-3">
                  <label for="yoga-type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
                    type</label>
                  <select id="yoga-type" v-model="yogagraphyModel.type"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a type</option>
                    <option value="img">Image</option>
                    <option value="card">Christmas card</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="yoga-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" id="yoga-name" v-model="yogagraphyModel.name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter any text" required />
                </div>
                <button type="submit" :disabled="yogagraphyModel.isLoading"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <span v-show="!yogagraphyModel.isLoading">Submit</span>
                  <span v-show="yogagraphyModel.isLoading">Lädt...</span>
                </button>
              </form>
            </div>
          </template>
          <template #text>
            The API that response the generated Image is written in Laravel and the PHP Server
            is running in a Docker Container
          </template>
          <template #tech>
            <span class="icon-[logos--laravel] mr-3" title="Laravel" style="width: 32px; height: 32px;"></span>
            <span class="icon-[logos--react] mr-3" title="React" style="width: 32px; height: 32px;"></span>
            <span class="icon-[logos--docker-icon] mr-3" title="Docker" style="width: 32px; height: 32px;"></span>
          </template>
        </ProjectReferenceItem>

        <PopupModal :is-modal-visible="yogagraphyResultModalVisible" @close="yogagraphyResultModalVisible = false">
          <img class="mx-auto" max-height="200" :src="yogagraphyApiResponse.image.encoded" alt="Yogagrapy image" />
        </PopupModal>
        <ProjectReferenceItem github-link="https://github.com/devonik/landingpage-dinnebier">
          <template #header>
            <img class="mx-auto object-cover md:rounded-xl px-6"
              src="@/assets/projects/project-landingpage-dinnebier.gif" alt="Jaguar E-Pace Landingpage Screenshot">
          </template>
          <template #title>
            Car Landingpage
          </template>
          <template #subtitle>
            This landingpage was made for specific car - The Jaguar E-Pace.
          </template>
          <template #text>
            This project is written in native
            Javascript, Scss and nunjucks as a template engine and is hosted on netlify
          </template>
          <template #tech>
            <span class="icon-[simple-icons--nunjucks] mr-3" title="Nunjucks" style="width: 32px; height: 32px;"></span>
            <span class="icon-[vscode-icons--file-type-scss] mr-3" title="Scss"
              style="width: 32px; height: 32px;"></span>
            <span class="icon-[skill-icons--javascript] mr-3" title="Javascript"
              style="width: 32px; height: 32px;"></span>
          </template>
        </ProjectReferenceItem>
      </div>
      <div class="max-w-md mx-auto">
        <h3 class="text-2xl text-center my-6">Project history</h3>
        <!-- Company history -->
        <div class="mb-6">
          <div
            class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="my-3">
              <img class="mx-auto object-cover md:rounded-xl md:w-48" src="@/assets/projects/pongmaster-logo.png"
                alt="Pongmaster">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">React native developer
                @Pongmaster</div>
              <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                I supported this company by maintaining their React native App</p>
              <p class="mt-3 text-gray-500 dark:text-gray-300">
                I added some features like:
              <ul class="list-disc text-gray-500 dark:text-gray-400">
                <li>A filter function within a Google Maps integration. The user can either search for a location name
                  or
                  filter</li>
                <li>Some design improvements from Figma for existing screens</li>
                <li>Implement a user review function so users can review public tabletennis tables</li>
                <li>Some other adjustments</li>
              </ul>
              </p>
            </div>
          </div>
          <div
            class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="my-3">
              <img class="mx-auto object-cover md:rounded-xl md:w-48" src="@/assets/projects/heiland-logo.png"
                alt="Heiland">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Full stack developer @Heiland
                GmbH</div>
              <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                I worked here 4 years as a senior full stack developer</p>
              <p class="mt-3 text-gray-500 dark:text-gray-300">
                What else I did
              <ul class="list-disc text-gray-500 dark:text-gray-400">
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
          <div
            class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="my-3">
              <img class="mx-auto object-cover md:rounded-xl md:w-48" src="@/assets/projects/upljft-logo.png"
                alt="Upljft">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Full stack developer @upljft
                GmbH
              </div>
              <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                I worked here for 6 Month as a senior full stack developer</p>
              <p class="mt-3 text-gray-500 dark:text-gray-300">
                What else I did
              <ul class="list-disc text-gray-500 dark:text-gray-400">
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
          <div
            class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="my-3">
              <img class="mx-auto object-cover md:rounded-xl md:w-48" src="@/assets/projects/osp-logo.png" alt="OSP">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Otto group solution provider
                GmbH
              </div>
              <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                I worked here for 1,5 years as a senior full stack developer</p>
              <p class="mt-3 text-gray-500 dark:text-gray-300">
                What else I did
              <ul class="list-disc text-gray-500 dark:text-gray-400">
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
          <div
            class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="my-3">
              <img class="mx-auto object-cover md:rounded-xl md:w-48" src="@/assets/projects/berenberg-logo.jpeg"
                alt="Berenberg">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Education @Berenberg
              </div>
              <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                I made here my 3 years education Computer Science Expert Subject Area: Software Development</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-pink-500 text-center text-xl mb-3">Open source projects</p>
          <div
            class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="my-3">
              <img class="mx-auto object-cover md:rounded-xl md:w-48" src="@/assets/projects/nuxt-3-intercom.gif"
                alt="Nuxt 3 intercom">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nuxt3 module: nuxt-3-intercom
              </div>
              <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                An module to easlily opt-in the intercom js instance. Including lazy loading if needed</p>
              <p class="mt-3 text-gray-500 dark:text-gray-300">This nuxt 3 module provides a client side plugin that
                add
                intercom to window and provides $intercom instance so you can easily access intercom function like
                update
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
          <div
            class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="my-3">
              <img class="mx-auto object-cover md:rounded-xl md:w-48" src="@/assets/projects/nuxt-18n-data.gif"
                alt="Nuxt i18n data">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nuxt3 module: nuxt-i18n-data
              </div>
              <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                A module for nuxt3 to easily provide data for vue-i18n</p>
              <p class="mt-3 text-gray-500 dark:text-gray-300">This nuxt 3 module provides a client side plugin that
                add
                This nuxt 3 module can be used to load locale messages in the vue-i18n instance. The api configured in
                the
                config will be called initial after nuxt build and can be called again via plugin that is provided by
                this
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
          <div
            class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="my-3">
              <img class="mx-auto object-cover md:rounded-xl md:w-48"
                src="@/assets/projects/nuxt-vuetify-nested-containment.gif" alt="Nuxt vuetify nested containment">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nuxt3 module:
                nuxt-vuetify-nested-containment</div>
              <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                A module for nuxt3 that extend vuetify components</p>
              <p class="mt-3 text-gray-500 dark:text-gray-300">This nuxt 3 module provides a client side plugin that
                add
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
    </div>
  </main>
</template>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
