<script setup lang="ts">
import type { Place } from '@/types'
const props = defineProps<{
    place: Place
    show: boolean
}>()

defineEmits(["close"]);
</script>

<template>
    <div>
        <Transition>
            <div v-if="show"
                class="absolute inset-0 flex items-center justify-center z-20 bg-gray-800/40 backdrop-blur">
                <div
                    class="relative shrink-0 w-full max-w-2xl rounded-md flex flex-col shadow-2xl bg-white dark:bg-gray-800 dark:text-white">
                    <button class="absolute -right-12 -top-2 text-gray-300 p-2 hover:text-white"
                        @click="$emit('close')">
                        <span class="icon-[ic--close] w-8 h-8"></span>
                    </button>
                    <h3 class="w-full bg-gray-900 p-4 rounded-t-md text-2xl">{{ place.title }}</h3>
                    <div class="p-4 space-y-4">
                        <pre>{{ place.details }}</pre>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active,
.v-enter-active .modal-wrapper-inner,
.v-leave-active .modal-wrapper-inner {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-from .modal-wrapper-inner,
.v-leave-to .modal-wrapper-inner {
    transform: translateY(-50px);
}
</style>
