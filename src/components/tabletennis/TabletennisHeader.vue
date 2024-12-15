<script setup lang="ts">
import { inject, provide, ref } from 'vue'
import places from '@/assets/tabletennis/places.json'
import regions from '@/assets/tabletennis/regions.json'
import VueSelect, { type Option } from 'vue3-select-component'
import TabletennisMap from '@/components/tabletennis/TabletennisMap.vue'
import type { Filter, Place } from '@/types'
import { mapCenterKey } from '@/utils/keys'

const props = withDefaults(
  defineProps<{
    isFilterActive?: boolean
    filteredPlaces: Place[]
  }>(),
  {
    isFilterActive: true
  }
)

const emit = defineEmits(['filter'])

const filter = ref<Filter>({
  country: '',
  region: ''
})

const mapCenter = ref<number[]>()

if (!inject(mapCenterKey)) provide(mapCenterKey, mapCenter)

function resetFilter() {
  filter.value = {
    country: '',
    region: ''
  }
  emit('filter', filter.value)
}

const vueSelectRegionOptions: Array<Option<string> & { coords: number[] }> = regions.map(
  (region) => {
    return { label: region.title, value: region.key, coords: region.coords }
  }
)
</script>

<template>
  <div class="m-6 flex flex-col gap-3 text-center">
    <h1 class="text-4xl">
      <span class="text-red-600">Tabletennis</span> <span class="text-black">Worldwide</span>
    </h1>
    <p class="mb-6 text-gray-500">Find places to play tabletennis around the world</p>
    <div class="flex flex-col gap-3" v-if="isFilterActive">
      <div class="mr-3 flex flex-col gap-2">
        <label for="filter-continent">Filter by region</label>
        <VueSelect
          v-model="filter.region"
          class="m-auto"
          :options="vueSelectRegionOptions"
          placeholder="Select an region"
          @option-selected="
            (option) => {
              mapCenter = option.coords
              $emit('filter', filter)
            }
          "
        />
      </div>
      <div class="mr-3 flex flex-col gap-2" v-if="filter.region">
        <label for="filter-country">Filter by country</label>
        <VueSelect
          v-model="filter.country"
          class="m-auto"
          :options="
            places
              .filter((place) => place.region === filter.region)
              .map((place) => place.country)
              .filter((v, i, a) => a.indexOf(v) == i)
              .map((country) => {
                return { label: country, value: country }
              })
          "
          placeholder="Select an country"
          @option-selected="
            (option) => {
              mapCenter = places.find((place) => place.country === option.value)?.coords
              $emit('filter', filter)
            }
          "
        />
      </div>
    </div>

    <div>
      <button class="rounded-lg border bg-red-300 px-3 font-medium text-black" @click="resetFilter">
        Reset filter
      </button>
    </div>

    <TabletennisMap :places="filteredPlaces" />
  </div>
</template>
<style scoped>
:deep(.vue-select) {
  max-width: 320px;
  z-index: 500;
}

:deep(.vue-select .menu-option) {
}
:deep(.menu) {
  margin-top: 0px;
}
</style>
