<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        default: 0
    }
})
</script>

<template>
    <div class="tabletennis__card">
        <img class="tabletennis__card__image" width="250" height="250" :alt="title" :src="imageSrc" />
        <div class="tabletennis__card__meta" :class="index % 2 ? 'text-red-500' : 'text-black'">
            <p class="font-medium">{{ title }}</p>
            <p class="opacity-50">{{ continent }}</p>
            <p class="opacity-50">{{ country + ', ' + place }}</p>
        </div>
    </div>
</template>
<style lang="scss">
.tabletennis__card {
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }

    &__image {
        border-radius: 6px;
    }

    &__meta {
        position: absolute;
        bottom: 40px;
        right: 25px;
    }
}
</style>