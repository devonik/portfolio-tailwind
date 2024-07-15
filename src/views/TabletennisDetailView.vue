<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TabletennisHeader from '@/components/tabletennis/TabletennisHeader.vue'
import TabletennisCard from '@/components/tabletennis/TabletennisCard.vue'
import type { Place } from '@/types'
import { useHead } from '@unhead/vue'
import TabletennisPlaces from '@/assets/tabletennis/places.json'

useHead({
    title: 'Tabletennis Worldwide',
    meta: [
        {
            name: 'description',
            content: "Here you can find some awesome handpicked places to play some tabletennis. I visited them and collect all the information for you",
        },
    ],
})
const route = useRoute()
const router = useRouter()
const place = ref(TabletennisPlaces.find(place => place.id + "" === route.params.placeId))

function navigatePlaceBack() {
    const placeBefore = TabletennisPlaces.find(entry => entry.id === parseInt(route.params.placeId as string) - 1)
    if (placeBefore) {
        router.replace('/tabletennis/' + placeBefore.id)
        place.value = placeBefore
    }
}

function navigatePlaceForward() {
    const placeForward = TabletennisPlaces.find(entry => entry.id === parseInt(route.params.placeId as string) + 1)
    if (placeForward) {
        router.replace('/tabletennis/' + placeForward.id)
        place.value = placeForward
    }
}
</script>
<template>
    <!-- Header -->
    <TabletennisHeader :is-filter-active="false"></TabletennisHeader>
    <hr class="mx-6">
    <div class="m-6" v-if="place">
        <div class="flex justify-between">
            <button @click="navigatePlaceBack">ZURÜCK</button>
            <button @click="navigatePlaceForward">VOR</button>
        </div>
        <div class="flex">
            <Transition name="fade" mode="out-in">
                <TabletennisCard :key="place.id" :place="place" class="mx-auto">
                </TabletennisCard>
            </Transition>

        </div>
        <!--Location-->
        <div class="flex my-3">
            <span class="mr-1 w-3/12">Icon</span>
            <div class="w-9/12">

                <a :href="place.details?.locationHref" class="mr-1 hover:underline text-blue-600" target="_blank">{{
        place.details?.locationText }}</a>
                <span>Icon new tab</span>
            </div>
        </div>
        <!--Time-->
        <div class="flex my-3">
            <span class=" mr-1 w-3/12">Icon</span>
            <div class="w-9/12">
                <p>{{ place.details?.time }}</p>
                <p>{{ place.details?.timeHint }}</p>
            </div>
        </div>
        <!--Coach-->
        <div class="flex my-3">
            <span class=" mr-1 w-3/12">Icon</span>
            <div class="w-9/12">
                <p>isCoachPossible: {{ place.details?.isCoachPossible }}</p>
            </div>
        </div>
        <!--Level-->
        <div class="flex my-3">
            <span class=" mr-1 w-3/12">Icon</span>
            <div class="w-9/12">
                <p>Level: {{ place.details?.level }}</p>
            </div>
        </div>
        <!--text-->
        <div class="flex my-3">
            <span class=" mr-1 w-3/12">Icon</span>
            <div class="w-9/12">
                <p>{{ place.details?.text }}</p>
            </div>
        </div>
    </div>

</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>