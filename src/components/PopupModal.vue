<script setup lang="ts">
defineProps<{
    isModalVisible: boolean
}>()
const emit = defineEmits(['close'])
</script>
<template>
    <transition name="fade">
        <div v-if="isModalVisible" class="h-full w-full fixed top-0 left-0 flex">
            <div @click="$emit('close')" class="absolute inset-0 z-0 opacity-70 bg-black"></div>
            <div class="w-full max-w-2xl max-h-2xl p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
                <slot>Popup default slot</slot>
                <div class="p-3 mt-2 text-center space-x-4 md:block">
                    <button @click="$emit('close')"
                        class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>