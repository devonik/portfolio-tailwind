<script setup lang="ts">
import { provide, ref } from 'vue'
import type { Ref } from 'vue'
import TabletennisHeader from '@/components/tabletennis/TabletennisHeader.vue'
import TabletennisCard from '@/components/tabletennis/TabletennisCard.vue'

import TabletennisPlaces from '@/assets/tabletennis/places.json'
import { useHead } from '@unhead/vue'
import type { Filter, FilterKey, Place } from '@/types'
import { mapCenterKey } from '@/utils/keys'

useHead({
  title: 'Tabletennis Worldwide',
  meta: [
    {
      name: 'description',
      content:
        'Here you can find some awesome handpicked places to play some tabletennis. I visited them and collect all the information for you'
    }
  ]
})

const places: Ref<Place[]> = ref(TabletennisPlaces as Place[])

provide(mapCenterKey, undefined)

function filter(filter: Filter) {
  places.value = TabletennisPlaces as Place[]
  Object.keys(filter).forEach((filterKey) => {
    const key: FilterKey = filterKey as FilterKey
    if (!filter[key]) return
    places.value = places.value.filter((place) => place[key] === filter[key])
  })
}
</script>
<template>
  <!-- Header -->
  <TabletennisHeader @filter="filter" :filtered-places="places"></TabletennisHeader>

  <hr class="mx-6" />
  <div class="my-3 text-center">
    <span>{{ places.length }} place(s) found</span>
  </div>
  <div class="m-6 flex flex-wrap justify-center gap-6">
    <TabletennisCard v-for="place in places" :key="place.id" :place="place" class="mr-3">
    </TabletennisCard>
  </div>
</template>
