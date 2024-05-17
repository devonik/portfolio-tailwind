<script setup lang="ts">
import { ref } from 'vue'
const choosed = ref()
const detailsLink = ref()
</script>
<template>
    <div class="h-56">
        <div class="app-bar_playground__image h-4/5"></div>
    </div>
    <main>
        <div class="text-pink-500 text-center text-xl mb-2">Voucher for marina - Divers weekend
        </div>
        <div v-if="choosed" class=" max-auto text-center p-3 rounded-xl shadow-md m-3">
            <p>You choosed {{ choosed }}!</p>
            <p class="text-red-500">This will be awesome :) I love you!</p>
            <p v-if="detailsLink">Details you can find <a target="_blank" :href="detailsLink"
                    class="text-blue-700">here</a></p>
        </div>
        <div v-else class="flex justify-around flex-col md:flex-row">
            <div @click="() => { choosed = 'Fun diving: 3 days / max 6 dives @orca' }"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white hover:cursor-pointer p-3 rounded-xl shadow-md m-3">
                <div class="flex">
                    <div class="content-center mr-3">
                        <span class="icon-[map--scuba-diving]" style="width: 64px; height: 64px;"></span>
                    </div>
                    <div>
                        <p class="text-lg">Option A: 3 days á 2 max. dives at Orca dive center bali</p>
                        <p class="text-sm">
                            Example: 25th Saturday 2 dive, 26th Sunday 2 dives, 27th 1 dive or 2 if possible
                        </p>
                    </div>
                </div>

            </div>
            <div @click="() => { choosed = 'Course: Advanced in SSI @orca' }"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white hover:cursor-pointer p-3 rounded-xl shadow-md m-3">
                <div class="flex">
                    <div class="content-center mr-3">
                        <span class="icon-[map--scuba-diving]" style="width: 64px; height: 64px;"></span>
                    </div>
                    <div>
                        <p class="text-lg">Option B: Advanced open water cource at Orca dive center bali</p>
                        <p class="text-sm">
                            Have to ask how this can be scheduled
                        </p>
                    </div>
                </div>

            </div>
            <div @click="() => { choosed = 'Fun diving: 4 / 7 dives with 2/3 nights @gilliair', detailsLink = 'http://www.giliairdivers.com/Dive-Packages/styled-13/' }"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white hover:cursor-pointer p-3 rounded-xl shadow-md m-3">
                <div class="flex">
                    <div class="content-center mr-3">
                        <span class="icon-[map--scuba-diving]" style="width: 64px; height: 64px;"></span>
                    </div>
                    <div>
                        <p class="text-lg">Option C: Gilly Air Fun dive package</p>
                        <p class="text-sm">
                            2 or 3 nights in the resort with the dive center gilli air divers.
                            It includes 4 or 7 dives.
                            It depends how much time we have on a weekend.
                        </p>
                    </div>
                </div>
            </div>
            <div @click="() => { choosed = 'Course: Advanced in SSI or PADI @gilliair', detailsLink = 'http://www.giliairdivers.com/styled/' }"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white hover:cursor-pointer p-3 rounded-xl shadow-md m-3">
                <div class="flex">
                    <div class="content-center mr-3">
                        <span class="icon-[map--scuba-diving]" style="width: 64px; height: 64px;"></span>
                    </div>
                    <div>
                        <p class="text-lg">Option D: Gilly Air Advance course</p>
                        <p class="text-sm">
                            You can make the course here via SSI or PADI. The program is different but that we ask them
                            for more information :)
                        </p>
                    </div>
                </div>
            </div>
            <div @click="() => { choosed = 'You can choose' }"
                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white hover:cursor-pointer p-3 rounded-xl shadow-md m-3">
                <div class="flex">
                    <div class="content-center mr-3">
                        <span class="icon-[material-symbols--hiking-sharp]" style="width: 64px; height: 64px;"></span>
                    </div>
                    <div>
                        <p class="text-lg">Option E: You can choose</p>
                        <p class="text-sm">
                            Example: Diving in Gili Air, hiking to the vulcano, trip to komodo
                            or any other activity
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
<style lang="scss">
.app-bar_playground__image {
    background-image: url(./../assets/app-bar-header-voucher.jpg);
    background-position: center center;
    background-size: cover;
    transition: opacity .4s cubic-bezier(.4, 0, .2, 1);
}
</style>