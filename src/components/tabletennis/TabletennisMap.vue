<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import { inject, ref } from 'vue'
import type { Place } from '@/types'
import regions from '@/assets/tabletennis/regions.json'
import { mapCenterKey } from '@/utils/keys'

const props = defineProps<{
  places: Place[]
}>()

const zoom = ref(4)
const mapCenter = inject(mapCenterKey)
</script>
<template>
  <div style="height: 300px; width: 100vh">
    <l-map
      ref="map"
      :use-global-leaflet="false"
      v-model:zoom="zoom"
      :center="mapCenter || regions[0].coords"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="place in places" :key="place.id" :lat-lng="place.coords">
        <l-popup>
          <p class="text-xl">{{ place.title }}</p>
          <p><RouterLink :to="'/tabletennis/' + place.id">Show more</RouterLink></p>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
