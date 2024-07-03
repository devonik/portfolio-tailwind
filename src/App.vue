<script setup lang="ts">
import AppBar from './components/layout/AppBar.vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"

import { inject } from '@vercel/analytics';
import { useHead } from '@unhead/vue'


inject();

useHead({
  title: 'Niklas Grieger - Freelance passionate senior full stack developer',
  meta: [
    {
      name: 'description',
      content: "My service: Freelance full stack development, Vue3 migration, Vue, Technical Consultation, Javascript Expert, Individual support",
    },
  ],
})

</script>
<template>
  <template v-if="$route.meta.layout !== 'plain'">
    <AppBar class="mb-6"></AppBar>
  </template>

  <router-view class="dark" />
  <SpeedInsights />
</template>