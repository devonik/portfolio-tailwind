<script setup lang="ts">
import { ref } from 'vue'
import PopupModal from '@/components/PopupModal.vue'

defineProps<{
  githubLink?: string
  fullScreenImageFileName?: string
  fullScreenImageAlt?: string
}>()
const isFullScreenModalOpen = ref(false)
</script>
<template>
  <div
    class="mx-auto mb-3 max-w-md overflow-hidden bg-white shadow-md md:max-w-2xl md:rounded-xl dark:bg-gray-800"
  >
    <div class="my-3 flex flex-col items-center gap-2">
      <slot name="header">Header placeholder. Overwrite via header slot </slot>
      <template v-if="fullScreenImageFileName">
        <button
          class="rounded-md border border-slate-300 p-2.5 text-center text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white hover:shadow-lg focus:border-slate-800 focus:bg-slate-800 focus:text-white active:border-slate-800 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          @click="isFullScreenModalOpen = true"
        >
          <span
            class="icon-[material-symbols--fullscreen]"
            style="width: 24px; height: 24px"
          ></span>
        </button>
        <PopupModal
          :is-modal-visible="isFullScreenModalOpen"
          @close="isFullScreenModalOpen = false"
        >
          <img
            class="mx-auto"
            width="500"
            :src="`/projects/${fullScreenImageFileName}`"
            :alt="fullScreenImageAlt"
          />
        </PopupModal>
      </template>
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold uppercase tracking-wide text-indigo-500">
        <slot name="title"> Overwrite via title slot </slot>
      </div>
      <p class="mt-1 block text-lg font-medium text-black dark:text-white">
        <slot name="subtitle"> </slot>
      </p>
      <p class="my-3 text-gray-500 dark:text-gray-300">
        <slot name="text"> Text placeholder. Overwrite via text slot </slot>
      </p>
      <div class="mb-3">
        <p class="mb-3 block text-lg font-medium text-black dark:text-white">Used technologies</p>
        <slot name="tech">Tech stack placeholder. Overwrite via tech slot </slot>
      </div>
      <slot name="links">
        <div class="mb-3" v-if="githubLink">
          <a
            target="_blank"
            :href="githubLink"
            class="me-2 inline-flex items-center rounded-lg border border-indigo-500 p-2.5 text-center text-sm font-medium text-indigo-500 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            ><span class="icon-[ri--github-fill] mr-1" style="width: 16px; height: 16px"></span>
            GitHub</a
          >
        </div>
      </slot>
    </div>
  </div>
</template>
