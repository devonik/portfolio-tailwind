<script setup lang="ts">
import Profile from '../components/Profile.vue'
import { useHead } from '@unhead/vue'

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
  <main>
    <Profile />
  </main>
</template>
