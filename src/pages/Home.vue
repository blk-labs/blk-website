<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Work } from '~/types'
const works: Ref<Work[]> = ref([
    {
        image: 'https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=972&q=80',
        text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
        title: 'Clikvet'
    },
    {
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
        title: 'Sketchd'
    },
    {
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
        title: 'Evolve fitness'
    },
])

const whatWeDo: Ref<Work[]> = ref([
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
</script>

<template>
    <section class="bg-[#8494F8]/10 pt-56 pb-14">
        <div class="container mx-auto px-4 lg:px-0">
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-3 lg:col-span-2 grid gap-9 content-center">
                    <span class="text-primary font-bold text-lg">WE ARE BLK LABS</span>
                    <h1 class="font-bold text-[#121633] text-4xl lg:text-5xl">A team of remote designers and developers building scalable and intuitive web solutions.</h1>
                    <BaseButton btnType="action" class="w-fit py-5 px-12 font-medium text-base">Send A Brief</BaseButton>
                </div>
                <div class="hidden lg:block">
                    <img src="/assets/keyboard.png">
                </div>
            </div>
        </div>
    </section>
    <section class="py-16">
        <div class="container mx-auto px-4 lg:px-0">
            <div class="grid gap-6">
                <span class="text-primary font-bold text-lg">WHAT WE HAVE DONE</span>
                <div class="flex justify-between items-center">
                    <h2 class="font-bold text-[#121633] text-4xl lg:text-6xl">Our recent work</h2>
                    <div class="hidden lg:flex items-center gap-4 text-3xl">
                        <BaseIcon icon="heroicons-outline:arrow-sm-left" class="text-[#989898]" />
                        <BaseIcon icon="heroicons-outline:arrow-narrow-right" class="text-black" />
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div v-for="(work, index) in works" :key="index" :class="`pt-${index*10}`">
                        <BaseWork :image="work.image" :title="work.title" :text="work.text" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-16">
        <div class="container mx-auto px-4 lg:px-0">
            <div class="grid gap-6">
                <span class="text-primary font-bold text-lg">WE ARE BLK LABS</span>
                <div class="flex justify-between items-center">
                    <h2 class="font-bold text-[#121633] text-4xl lg:text-6xl">What we do</h2>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 divide-x divide-dashed">
                    <div v-for="(tech, index) in whatWeDo" :key="index" class="p-10">
                        <BaseService :service="tech" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>