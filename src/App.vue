<script setup>
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
      content: "Hello my name is Niklas Grieger and I am a passionate full stack developer specialized in VueJs and Nuxt. My latest tech stack: VueJs 2 and 3, Nuxt, Vuetify, CI/CD with Gitlab / Bitbucket, PostgreSQL and AWS. Feel free to contact me if you need a Vue 2 to Vue3 migration or any other topics.",
    },
  ],
})

</script>
<template>
  <template v-if="$route.meta.layout !== 'plain'">
    <AppBar class="mb-6"></AppBar>
  </template>

  <router-view />
  <SpeedInsights />
</template>