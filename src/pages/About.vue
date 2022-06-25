<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Service } from '~/types'

const whatWeDo: Ref<Service[]> = ref([
    {
        image: '/assets/design icon_ccexpress 1.png',
        title: 'UI/UX Design',
        text: 'We work closely with our clients to wireframe, design, and sketch the most user friendly web and mobile applications.'
    },
])
</script>

<template>
    <section class="bg-accent/10 pt-64 pb-32">
        <div class="container mx-auto px-4 lg:px-0">
            <div class="grid gap-5">
                <h1 class="font-extrabold text-[#121633] text-4xl lg:text-7xl">Marhaba,<br>We are BLK Labs</h1>
                <p class="font-normal text-lg lg:text-3xl text-[#564D73]">Not your everyday tech company - we are remote developers who enjoy transforming business ideas into digital solutions</p>
            </div>
        </div>
    </section>
    <section class="py-24">
        <div class="container mx-auto px-4 grid gap-24 lg:px-0">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="grid content-start gap-14 mt-10">
                    <h2 class="font-bold text-accent text-4xl lg:text-6xl h-min">About Us</h2>
                    <p class="text-[#564D73] font-normal text-3xl">BLK Labs is an international web development company focused on building and deploying complex solutions. We utilize comprehensive digital consulting experience and employ build-execute-deploy model to provide effective solutions taking into account advanced seamless scaling and integration strategy. </p>
                </div>
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
                <div class="grid content-start gap-14 mt-10">
                    <p class="text-[#564D73] font-normal text-3xl">At our heart, we really are just a team of remote strategists and developers who enjoy code. It is addiction, skill, and passion. That is our vision; using our addiction to create products and provide solutions that work well.</p>
                </div>
            </div>
            <div class="grid gap-5 w-full lg:w-7/12">
                <p class="text-[#564D73] font-normal text-xl">We are a team devoted to each project from beginning to end. We combine creativity and modern development techniques to make digital experiences with quality design and optimal and efficient development. We love to work with people, for people, and give meaning to your work through our perceptive approaches to development.</p>
                <p class="text-[#564D73] font-normal text-xl">Since design and digital technology are continuously evolving, we undertand the need to constantly recycle and learn new tools. We have the capacity to experiment and make innovative ideas come to life. With us, the potential to visualize all possibilities is endless.</p>
            </div>
        </div>
    </section>
    <section class="bg-[#E6E8FD] py-12 lg:py-32">
        <div class="container mx-auto px-4 lg:px-0">
            <div class="grid gap-x-5 gap-y-14 grid-cols-3">
                <span class="text-primary font-bold text-lg">OUR COMMITMENT</span>
                <h2 class="font-bold text-neutral-600 text-3xl lg:text-4xl">Our team isn’t always about designing and developing; we carry a deep enthusiasm about learning, inspiring each other to be better developers and pushing boundaries. We bring this passion to our work, and adhere to a few core beliefs when working on your product.</h2>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>