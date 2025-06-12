<script setup>
import { ref } from 'vue'

const stackoverflowUserData = ref()
function fetchStackoverflowUserData() {
    try {
        return fetch(`https://api.stackexchange.com/2.3/users/${import.meta.env.VITE_STACKOVERFLOW_USER_ID}?order=desc&sort=reputation&site=stackoverflow`).then(response => {
            response.json().then(data => {
                stackoverflowUserData.value = data.items[0]
            })
        });
    } catch (error) {
        console.error("Could not fetchStackoverflowUserData for user: " + import.meta.env.VITE_STACKOVERFLOW_USER_ID, error);
    }
}
fetchStackoverflowUserData()

</script>
<template>
    <div>
        <div class="max-w-md mx-auto bg-white dark:bg-gray-800 md:rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:flex-shrink-0 my-6 mx-3">
                    <img class="h-48 w-full object-cover md:rounded-xl md:w-48" src="@/assets/profile.avif"
                        alt="It's just me">
                    <div v-if="stackoverflowUserData" class="mt-12">
                        <img height="265" width="265" src="/stackoverflow.png" alt="Stackoverflow profile">
                        <div class="flex flex-col items-center justify-center">
                            <img :src="stackoverflowUserData.profile_image"
                                class="h-48 w-full object-cover md:rounded-xl md:w-48" />
                            <p class="text-gray-500">Reputation: <span class="font-medium">{{
                        stackoverflowUserData.reputation }}</span></p>
                            <p class="text-gray-500">Badges</p>
                            <div class="stackoverflow-badge-wrapper stackoverflow-badge-wrapper--gold">
                                {{ stackoverflowUserData.badge_counts.gold }}
                            </div>
                            <div class="stackoverflow-badge-wrapper stackoverflow-badge-wrapper--silver">
                                {{ stackoverflowUserData.badge_counts.silver }}
                            </div>
                            <div class="stackoverflow-badge-wrapper stackoverflow-badge-wrapper--bronze">
                                {{ stackoverflowUserData.badge_counts.bronze }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-8">
                    <div class="mb-3">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">It's me</div>
                        <p class="block mt-1 text-lg font-medium text-black dark:text-white">
                            Something
                            about me</p>
                        <p class="mt-2 text-gray-500 dark:text-gray-300">
                            Hello, I am Niklas from Germany, and I'm a passionate full-stack software engineer.
                            <br><br>
I finished my education at the start of 2018, and I am always highly interested in new
 Technologies.<br>
My favorite technologies are VueJs, Nuxt, and Vuetify for the frontend NodeJs or Java Spring
                            Boot in the backend, PostgreSQL or NoSQL as a database, and AWS as a cloud provider. For app development, I am interested in React Native and Flutter projects.<br>
                            <br>
                            In every project I've been in, I worked as a full-stack developer, and I love being able to
                            Do everything myself in a project. However, my favorite area to specialize in is
                            Frontend.
                        </p>
                        <p class="block mt-2 text-lg font-medium text-black dark:text-white">I can help you:</p>
                        <ul class="mt-2 text-gray-500 dark:text-gray-300 list-disc">
                            <li>Evaluate what technology fits the best for your Project</li>
                            <li>Maintain or create your next VueJs project (7+ years experience)</li>
                            <li>Migrate your Version 2 VueJs (also Vuex, Nuxt, and Vuetify if used) to the latest Version 3.
                            </li>
                            <li>Work with NodeJs or Java Spring Boot as a REST API</li>
                            <li>Work with AWS services like AWS Lambda, AWS API Gateway, AWS Beanstalk, and more</li>
                            <li>Helping you with your CI/CD workflow</li>
                            <li>Detecting actual problems and finding efficient solutions in your workflow or code</li>
                            problems
                            <li>Overtake the CSS hassle ;)</li>
                            <li>Open mindset for new technologies</li>
                        </ul>

                    </div>
                    <div class="mb-3">
                        <p class="block mt-1 text-lg font-medium text-black dark:text-white">So when you have a frontend
                            project or any
                            other full stack question feel free to contact me
                            via
                            one of the channels
                        </p>
                        <p class="mt-3">
                            <a target="_blank" href="mailto:niklas.grieger@devnik.dev"
                                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center m-2 ms-0 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                                    class="icon-[ic--outline-email] mr-1" style="width: 16px; height: 16px;"></span>
                                Email</a>
                            <a target="_blank" href="https://www.linkedin.com/in/niklas-grieger-b98086152"
                                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center m-2 ms-0 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                                    class="icon-[la--linkedin] mr-1" style="width: 16px; height: 16px;"></span>
                                LinkedIn</a>

                            <a target="_blank" href="https://www.xing.com/profile/Niklas_Grieger2/"
                                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center m-2 ms-0 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                                    class="icon-[ion--logo-xing] mr-1" style="width: 16px; height: 16px;"></span>
                                Xing</a>
                            <a target="_blank" href="https://github.com/devonik"
                                class="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center m-2 ms-0 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"><span
                                    class="icon-[ri--github-fill] mr-1" style="width: 16px; height: 16px;"></span>
                                GitHub</a>

                        </p>

                    </div>
                    <hr class="mt-6 mb-6">
                    <div class="mb-3">
                        <p class="block mb-3 text-lg font-medium text-black dark:text-white">
                            In love with</p>
                        <span class="icon-[skill-icons--javascript] mr-3" title="Javascript"
                            style="width: 32px; height: 32px;"></span>
                        <span class="icon-[logos--nodejs] mr-3" title="NodeJs"
                            style="width: 32px; height: 32px;"></span>
                        <span class="icon-[devicon--vuejs] mr-3" title="VueJs"
                            style="width: 32px; height: 32px;"></span>
                        <span class="icon-[logos--nuxt-icon]" title="NuxtJs" style="width: 32px; height: 32px;"></span>
                    </div>
                    <div class="mb-3">
                        <p class="block mb-3 text-lg font-medium text-black dark:text-white">
                            Can work with</p>
                        <span class="icon-[devicon--react] mr-3" title="React"
                            style="width: 32px; height: 32px;"></span>
                        <span class="icon-[tabler--brand-react-native] mr-3" title="React native"
                            style="width: 32px; height: 32px;"></span>
                        <span class="icon-[logos--postgresql] mr-3" title="PostgreSQL"
                            style="width: 32px; height: 32px;"></span>
                        <span class="icon-[bxl--spring-boot] mr-3" title="Java Springboot"
                            style="width: 32px; height: 32px;"></span>
                        <span class="icon-[logos--aws] mr-3" title="AWS" style="width: 32px; height: 32px;"></span>
                        <span class="icon-[devicon--docker]" title="Docker" style="width: 32px; height: 32px;"></span>
                    </div>
                    <div>
                        <p class="block mb-3 text-lg font-medium text-black dark:text-white">
                            Interested in and wanna learn more</p>
                        <span class="icon-[devicon--flutter]" title="Flutter" style="width: 32px; height: 32px;"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.stackoverflow-badge-wrapper {
    width: 174px;
    text-align: center;
    margin-top: 6px;

    &--gold {
        border: 1px solid hsl(45, 100%, 42%);
        border-radius: 4px;
        background-color: hsl(46, 100%, 91%);
    }

    &--silver {
        border: 1px solid hsl(210, 5%, 68%);
        border-radius: 4px;
        background-color: hsl(0, 0%, 95%);
    }

    &--bronze {
        border: 1px solid hsl(28, 43%, 65%);
        border-radius: 4px;
        background-color: hsl(28, 40%, 92%);
    }
}
</style>