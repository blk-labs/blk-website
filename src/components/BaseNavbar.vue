<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue';

const showMenu = ref(false)
const navItems = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Services',
        path: '/services'
    },
    {
        title: 'Our work',
        path: '#'
    },
    {
        title: 'Blog',
        path: '#'
    },
    {
        title: 'About',
        path: '/about-us'
    },
    {
        title: 'Contact',
        path: '#'
    },
]

const toggleNavbar = () => {
    showMenu.value = !showMenu.value;
}
</script>

<template>
    <nav class="absolute top-0 left-0 right-0 z-10">
        <div class="relative container mx-auto px-4 lg:px-0 pt-8">
            <div class="flex justify-between items-center">
                <img alt="BLK" src="https://blklabs.co/static/media/blk-logoDark.13e50d81.png" class="w-20 lg:w-24 h-20 lg:h-24" />
                <BaseButton type="button" class="rounded-full p-4 bg-white drop-shadow-xl border-none" @click="toggleNavbar()">
                    <BaseIcon icon="heroicons-outline:menu-alt-4" class="text-2xl text-black" />
                </BaseButton>
            </div>
            <Transition name="slide-fade">
                <div v-if="showMenu" class="fixed lg:absolute hidden lg:flex py-8 w-screen h-screen lg:h-fit lg:max-w-sm lg:top-8 lg:right-0 bg-accent shadow-none lg:shadow-2xl lg:shadow-accent z-20">
                    <div class="container mx-auto px-5 lg:px-10 lg:pb-14 pt-8 lg:pt-0">
                        <div class="animate__animated animate__fadeInDown grid gap-12 lg:gap-1">
                            <div class="flex items-center justify-between">
                                <img alt="BLK" src="https://blklabs.co/static/media/blk-logoDark.13e50d81.png" class="w-20 h-20 lg:hidden" />
                                <BaseButton type="button" class="rounded-full p-3 lg:p-2 bg-white drop-shadow-xl border-none ml-auto" @click="toggleNavbar()">
                                    <BaseIcon icon="heroicons-outline:x" class="text-xl lg:text-2xl text-black" />
                                </BaseButton>
                            </div>
                            <div class="grid justify-items-center lg:justify-items-start gap-8 lg:gap-3.5 lg:w-fit">
                                <router-link v-for="navItem in navItems" :key="navItem.title" :to="navItem.path" class="text-white font-bold text-4xl lg:text-left" @click="toggleNavbar()">{{ navItem.title }}</router-link>
                                <div class="flex items-center gap-7">
                                    <div v-for="n in 3" :key="n" class="p-4 bg-white/40 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </nav>
    <Transition name="slide-fade">
        <div v-if="showMenu" class="fixed lg:hidden py-8 w-screen h-screen lg:h-fit lg:max-w-sm lg:top-8 lg:right-0 bg-accent shadow-none lg:shadow-2xl lg:shadow-accent z-20">
            <div class="container mx-auto px-5 lg:px-10 lg:pb-14 pt-4 lg:pt-0">
                <div class="animate__animated animate__fadeInDown grid gap-12 lg:gap-1">
                    <div class="flex items-center justify-between">
                        <img alt="BLK" src="https://blklabs.co/static/media/blk-logoDark.13e50d81.png" class="w-20 h-20 lg:hidden" />
                        <BaseButton type="button" class="rounded-full p-3 lg:p-2 bg-white drop-shadow-xl border-none ml-auto" @click="toggleNavbar()">
                            <BaseIcon icon="heroicons-outline:x" class="text-xl lg:text-2xl text-black" />
                        </BaseButton>
                    </div>
                    <div class="grid justify-items-center lg:justify-items-start gap-8 lg:gap-3.5 lg:w-fit">
                        <router-link v-for="navItem in navItems" :key="navItem.title" :to="navItem.path" class="text-white font-bold text-4xl lg:text-left" @click="toggleNavbar()">{{ navItem.title }}</router-link>
                        <div class="flex items-center gap-7">
                            <div v-for="n in 3" :key="n" class="p-4 bg-white/40 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>