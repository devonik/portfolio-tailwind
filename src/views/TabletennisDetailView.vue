<script setup lang="ts">
import { provide, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TabletennisHeader from '@/components/tabletennis/TabletennisHeader.vue'
import TabletennisCard from '@/components/tabletennis/TabletennisCard.vue'
import type { Place } from '@/types'
import { useHead } from '@unhead/vue'
import TabletennisPlaces from '@/assets/tabletennis/places.json'
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
const route = useRoute()
const router = useRouter()
const place = ref(
  TabletennisPlaces.find((place) => place.id + '' === route.params.placeId) as Place
)
const mapCenter = ref<number[]>(place.value.coords)
provide(mapCenterKey, mapCenter)

function navigatePlaceBack() {
  const placeBefore = TabletennisPlaces.find(
    (entry) => entry.id === parseInt(route.params.placeId as string) - 1
  ) as Place
  if (placeBefore) {
    router.replace('/tabletennis/' + placeBefore.id)
    place.value = placeBefore
    mapCenter.value = place.value.coords
  }
}

function navigatePlaceForward() {
  const placeForward = TabletennisPlaces.find(
    (entry) => entry.id === parseInt(route.params.placeId as string) + 1
  ) as Place
  if (placeForward) {
    router.replace('/tabletennis/' + placeForward.id)
    place.value = placeForward
    mapCenter.value = place.value.coords
  }
}
</script>
<template>
  <!-- Header -->
  <TabletennisHeader :is-filter-active="false" :filtered-places="[place]"></TabletennisHeader>
  <hr class="mx-6" />
  <div class="m-6" v-if="place">
    <div class="relative flex">
      <button
        v-if="
          TabletennisPlaces.find(
            (entry) => entry.id === parseInt(route.params.placeId as string) - 1
          )
        "
        @click="navigatePlaceBack"
        style="position: absolute; left: 0px; top: 30%"
      >
        <span
          class="icon-[typcn--arrow-left-outline] text-gray-500"
          style="width: 64px; height: 64px"
        ></span>
      </button>
      <button
        v-if="
          TabletennisPlaces.find(
            (entry) => entry.id === parseInt(route.params.placeId as string) + 1
          )
        "
        @click="navigatePlaceForward"
        style="position: absolute; right: 0px; top: 30%"
      >
        <span
          class="icon-[typcn--arrow-right-outline] text-gray-500"
          style="width: 64px; height: 64px"
        ></span>
      </button>
      <Transition name="fade" mode="out-in">
        <TabletennisCard :key="place.id" :place="place" class="mx-auto"> </TabletennisCard>
      </Transition>
    </div>
    <!--Location-->
    <div class="my-3 flex">
      <div class="mr-1 w-3/12">
        <span class="icon-[logos--google-maps]" style="width: 32px; height: 32px"></span>
      </div>
      <div class="w-9/12">
        <a
          :href="place.details?.locationHref"
          class="mr-1 text-blue-600 hover:underline"
          target="_blank"
          >{{ place.details?.locationText }}</a
        >
        <span class="icon-[fluent-mdl2--open-in-new-tab]" style="width: 16px; height: 16px"></span>
      </div>
    </div>
    <!--Time-->
    <div class="my-3 flex">
      <div class="mr-1 w-3/12">
        <span class="icon-[ri--calendar-schedule-line]" style="width: 32px; height: 32px"></span>
      </div>
      <div class="w-9/12">
        <p>{{ place.details?.time }}</p>
        <p>{{ place.details?.timeHint }}</p>
      </div>
    </div>
    <!--Coach-->
    <div class="my-3 flex">
      <div class="mr-1 w-3/12">
        <span class="icon-[mdi--teacher]" style="width: 32px; height: 32px"></span>
      </div>
      <div class="w-9/12">
        <p>
          {{
            place.details?.isCoachPossible
              ? `Yes - its possible to take a session with the coach`
              : `No -
                    there is no coach.But you can enjoy playin with other people`
          }}
        </p>
      </div>
    </div>
    <!--Level-->
    <div class="my-3 flex">
      <div class="mr-1 w-3/12">
        <span class="icon-[twemoji--level-slider]" style="width: 32px; height: 32px"></span>
      </div>
      <div class="w-9/12">
        <p>This place is recommended for {{ place.details?.level }}</p>
      </div>
    </div>
    <!--text-->
    <div class="my-3 flex">
      <div class="mr-1 w-3/12">
        <span class="icon-[majesticons--text]" style="width: 32px; height: 32px"></span>
      </div>
      <div class="w-9/12">
        <p>{{ place.details?.text }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
