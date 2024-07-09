<script setup lang="ts">
import type { Place } from '@/types'
import { useRouter } from 'vue-router'
const props = defineProps<{
    place: Place
}>()
const router = useRouter()

function showDetail() {
    router.push('/tabletennis/' + props.place.id)
}
</script>

<template>
    <div class="tabletennis__card" @click="showDetail">
        <img class="tabletennis__card__image" width="250" height="250" :alt="place.title" :src="place.imageSrc" />
        <div class="tabletennis__card__meta">
            <p class=" font-medium">{{ place.title }}</p>
            <p class="opacity-50">{{ place.continent }}</p>
            <p class="opacity-50">{{ place.country + ', ' + place.place }}</p>
        </div>
    </div>
</template>
<style lang="scss">
.tabletennis__card {
    position: relative;
    width: 250px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }

    &__image {
        border-radius: 6px;
    }

    &__meta {}
}
</style>