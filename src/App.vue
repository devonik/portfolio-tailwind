<script setup>
import AppBar from './components/layout/AppBar.vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>
<template>
  <AppBar class="mb-6"></AppBar>
  <router-view />
  <SpeedInsights />
</template>