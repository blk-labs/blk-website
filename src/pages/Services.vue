<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Service } from './../types'

const whatWeDo: Ref<Service[]> = ref([
    {
        image: '/assets/design icon_ccexpress 1.png',
        title: 'UI/UX Design',
        text: 'We work closely with our clients to wireframe, design, and sketch the most user friendly web and mobile applications.'
    },
    {
        image: '/assets/web-dev icon_ccexpress 1.png',
        title: 'Web development',
        text: 'We collaborate with you to create high quality websites; from simple websites to online stores to CMS, we do it all.'
    },
    {
        image: '/assets/web app_ccexpress 1.png',
        title: 'Web application',
        text: 'One development for all platforms. We develop with the most innovative technologies to create highly scalable web apps.'
    },
    {
        image: '/assets/Mobile-app_ccexpress 1.png',
        title: 'Mobile application',
        text: 'We specialize in building high quality native mobile apps for Android and iOS that are interactive, engaging and fun.'
    },
    {
        image: '/assets/maintenance_ccexpress 1.png',
        title: 'Support & Maintenance',
        text: 'Our commitment doesn’t finish with the project’s end; we manage your digital product and we go with you beyond the delivery.'
    },
])

const howWeWork: Ref<Service[]> = ref([
    {
        image: '/assets/strategy_ccexpress 1.png',
        title: 'Strategy',
        text: 'We take your idea, architect, then plan your project in an agile manner.'
    },
    {
        image: '/assets/deisgn-2_ccexpress 1.png',
        title: 'Deisgn',
        text: 'We wireframe, UI/UX design, and prototype your project using modern trends.'
    },
    {
        image: '/assets/development_ccexpress 1.png',
        title: 'Development',
        text: 'We build and test the product using modern technologies and our chosen set of tools.'
    },
    {
        image: '/assets/delivery_ccexpress 1.png',
        title: 'Delivery',
        text: 'We deliver and deploy your product in a timely manner and provide maintenance if necessary.'
    },
])
</script>

<template>
    <div id="services">
        <section class="bg-accent/10 pt-64 pb-32">
            <div class="container mx-auto px-4 lg:px-0">
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-3 lg:col-span-2 grid gap-9 content-center">
                        <h1 class="font-bold text-[#121633] text-4xl lg:text-5xl">Develop your digital product with the latest and innovative technologies.</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-16">
            <div class="container mx-auto px-4 lg:px-0">
                <div class="grid gap-6">
                    <span class="text-primary font-bold text-lg">OUR PROCESS</span>
                    <div class="flex justify-between items-center">
                        <h2 class="font-bold text-[#121633] text-4xl lg:text-6xl">How we work</h2>
                    </div>
                    <div class="grid gap-10 grid-cols-1 lg:grid-cols-4">
                        <div v-for="(process, index) in howWeWork" :key="index" class="lg:pr-10" :class="index === 3 ? 'divide-transparent' : ''">
                            <BaseService :service="process" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-24">
            <div class="container mx-auto px-4 lg:px-0">
                <div class="grid gap-6">
                    <span class="text-primary font-bold text-lg">WE ARE BLK LABS</span>
                    <div class="flex justify-between items-center">
                        <h2 class="font-bold text-[#121633] text-4xl lg:text-6xl">What we do</h2>
                    </div>
                    <div class="grid gap-10 grid-cols-1 lg:grid-cols-3 lg:divide-x lg:divide-dashed lg:divide-accent">
                        <div v-for="(tech, index) in whatWeDo" :key="index" class="lg:p-10" :class="index === 3 ? 'divide-transparent' : ''">
                            <BaseService :service="tech" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-[#E6E8FD] py-12 lg:py-32">
            <div class="container mx-auto px-4 lg:px-0">
                <div class="grid gap-6 content-center lg:font-normal">
                    <span class="text-primary font-bold text-lg">OUR COMMITMENT</span>
                    <h2 class="font-bold text-neutral-600 text-3xl lg:text-4xl">Our team isn’t always about designing and developing; we carry a deep enthusiasm about learning, inspiring each other to be better developers and pushing boundaries. We bring this passion to our work, and adhere to a few core beliefs when working on your product.</h2>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>