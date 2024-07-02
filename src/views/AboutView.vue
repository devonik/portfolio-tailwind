<script setup>
import Profile from '../components/Profile.vue'
import { useHead } from '@unhead/vue'

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
  <main>
    <Profile />
  </main>
</template>
