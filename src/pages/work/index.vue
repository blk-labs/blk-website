<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Work } from '~/types'

const works: Ref<Work[]> = ref([
    {
        image: 'https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=972&q=80',
        text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
        title: 'Clikvet',
        path: ''
    },
    {
        image: '/assets/sketchd.png',
        text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
        title: 'Sketchd',
        path: ''
    },
    {
        image: '/assets/mph.png',
        text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
        title: 'My Political Hub',
        path: ''
    },
    {
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
        title: 'Evlove fitness',
        path: ''
    },
    {
        image: '/assets/f11.png',
        text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
        title: 'Fantasy 11',
        path: ''
    },
])
</script>

<template>
    <div id="our-work">
        <section class="bg-accent/10 pt-64 pb-32">
            <div class="container mx-auto px-4 lg:px-0">
                <div class="grid gap-6">
                    <span class="text-primary font-bold text-lg">WE ARE BLK LABS</span>
                    <h1 class="font-bold text-[#121633] text-4xl lg:text-7xl">We manage your ideas</h1>
                </div>
            </div>
        </section>
        <section class="py-16">
            <div class="container mx-auto px-4 lg:px-0">
                <div class="grid gap-16">
                    <div class="grid gap-6">
                        <span class="text-primary font-bold text-lg">WHAT WE HAVE DONE</span>
                        <h2 class="font-bold text-[#121633] text-4xl lg:text-6xl">Our recent work</h2>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 pb-5 lg:pb-20">
                        <div v-for="(work, index) in works" :key="index" class="even:lg:mt-10">
                            <BaseWork :image="work.image" :title="work.title" :text="work.text" />
                        </div>
                        <div class="w-full h-full bg-[#F3F4FE]/40 even:lg:mt-10 grid justify-items-center content-center py-20">
                            <span class="font-extrabold text-4xl lg:text-6xl text-center">More projects <br> coming soon.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>