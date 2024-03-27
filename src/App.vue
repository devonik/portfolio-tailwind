<script setup>
import AppBar from './components/layout/AppBar.vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"

import { inject } from '@vercel/analytics';
inject();
</script>
<template>
  <AppBar class="mb-6"></AppBar>
  <router-view />
  <SpeedInsights />
</template>