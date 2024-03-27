<script setup>
import AppBar from './components/layout/AppBar.vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { Analytics } from "@vercel/analytics/vue"
</script>
<template>
  <AppBar class="mb-6"></AppBar>
  <router-view />
  <SpeedInsights />
  <Analytics />
</template>