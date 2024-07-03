<script setup lang="ts">
import { ref } from 'vue'
import TabletennisHeader from '@/components/tabletennis/TabletennisHeader.vue'
import TabletennisCard from '@/components/tabletennis/TabletennisCard.vue'
import TabletennisPlaces from '@/assets/tabletennis/places.json'
import { useHead } from '@unhead/vue'

useHead({
    title: 'Tabletennis Worldwide',
    meta: [
        {
            name: 'description',
            content: "Here you can find some awesome handpicked places to play some tabletennis. I visited them and collect all the information for you",
        },
    ],
})

const places = ref(TabletennisPlaces)
function filter(filter) {
    places.value = TabletennisPlaces
    Object.keys(filter).forEach(filterKey => {
        if (typeof filter[filterKey] === 'undefined') return
        places.value = places.value.filter(place => place[filterKey] === filter[filterKey])
    });
}
</script>
<template>
    <!-- Header -->
    <TabletennisHeader @filter="filter"></TabletennisHeader>
    <hr class="mx-6">
    <div class="flex m-6">
        <TabletennisCard v-for="(place, index) in places" :key="place.title" v-bind="place" :index="index" class="mr-3">
        </TabletennisCard>
    </div>
</template>