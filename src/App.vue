<script setup>
import AppBar from './components/layout/AppBar.vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"

import { inject } from '@vercel/analytics';

inject();
</script>
<template>
  <template v-if="$route.meta.layout !== 'playground'">
    <AppBar class="mb-6"></AppBar>
  </template>

  <router-view />
  <SpeedInsights />
</template>