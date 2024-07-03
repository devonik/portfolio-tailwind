<script setup lang="ts">
import { ref } from 'vue'
import places from '@/assets/tabletennis/places.json'
import { groupBy } from "@/utils/helper";

const filter = ref({
    country: undefined,
    continent: undefined
})
const emit = defineEmits(['filter'])

function resetFilter() {
    filter.value = {
        country: undefined,
        continent: undefined
    }
    emit('filter', filter.value)
}
</script>

<template>

    <div class="text-center m-6">
        <h1 class="text-4xl"><span class="text-red-600">Tabletennis</span> <span class="text-black">Worldwide</span>
        </h1>
        <p class="text-gray-500 mt-1 mb-6">Find places to play tabletennis around the world</p>
        <div class="flex">
            <div class="flex flex-col mr-3">
                <label for="filter-continent">Filter by continent</label>
                <select v-model="filter.continent" id="filter-continent" @change="$emit('filter', filter)">
                    <option v-for="continent in Object.keys(groupBy(places, 'continent'))" :key="continent"
                        :value="continent">
                        {{ continent }}
                    </option>
                </select>
            </div>
            <div class="flex flex-col mr-3" v-if="filter.continent">
                <label for="filter-country">Filter by country</label>
                <select v-model="filter.country" id="filter-country" @change="$emit('filter', filter)">
                    <option v-for="place in places.filter(place => place.continent === filter.continent)"
                        :key="place.country" :value="place.country">
                        {{ place.country }}
                    </option>
                </select>
            </div>
            <div>
                <button class="border bg-red-300 px-3 rounded-lg font-medium text-black" @click="resetFilter">Reset
                    filter</button>
            </div>
        </div>
    </div>
</template>