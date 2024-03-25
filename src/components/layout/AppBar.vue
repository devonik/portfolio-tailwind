<template>
    <div class="h-52">
        <div class="app-bar__image"></div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const enabled = ref(false)
</script>
<style lang="scss">
.app-bar__image {
    background-image: linear-gradient(to right top, rgb(1, 87, 155), rgba(25, 32, 72, 0.7)), url(./../../assets/app-bar-image.avif);
    background-position: center center;
    background-size: cover;
    transition: opacity .4s cubic-bezier(.4, 0, .2, 1);
    height: 100%;
}
</style>