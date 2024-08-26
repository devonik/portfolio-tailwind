<script setup lang="ts">
defineProps<{
    githubLink?: string
}>()
</script>
<template>
    <div class="max-w-md mx-auto mb-3 bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="my-3">
            <slot name="header">Header placeholder. Overwrite via header slot </slot>

        </div>
        <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                <slot name="title">
                    Overwrite via title slot
                </slot>
            </div>
            <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                <slot name="subtitle">
                </slot>
            </p>
            <p class="my-3 text-gray-500 dark:text-gray-300">
                <slot name="text">
                    Text placeholder. Overwrite via text slot
                </slot>
            </p>
            <div class="mb-3">
                <p class="block mb-3 text-lg font-medium text-black dark:text-white">
                    Used technologies</p>
                <slot name="tech">Tech stack placeholder. Overwrite via tech slot </slot>
            </div>
            <slot name="links">
                <div class="mb-3" v-if="githubLink">
                    <a target="_blank" :href="githubLink"
                        class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                            class="icon-[ri--github-fill] mr-1" style="width: 16px; height: 16px;"></span>
                        GitHub</a>
                </div>
            </slot>

        </div>
    </div>
</template>