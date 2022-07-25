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
        path: '/our-work'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'About',
        path: '/about-us'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
]

const socials = [
    {
        icon: 'entypo-social:linkedin-with-circle',
        path: 'https://www.linkedin.com/company/blk-labs/'
    },
    {
        icon: 'entypo-social:twitter',
        path: 'https://twitter.com/blk_labs'
    },
    {
        icon: 'carbon:logo-instagram',
        path: 'https://www.instagram.com/blk_labs/'
    },
    {
        icon: 'bi:medium',
        path: 'http://medium.com/@blklabs'
    },
]

const toggleNavbar = () => {
    showMenu.value = !showMenu.value;
}
</script>

<template>
    <nav class="absolute top-0 left-0 right-0 z-10">
        <div class="relative max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 pt-8">
            <div class="flex justify-between items-center">
                <router-link to="/">
                    <img alt="BLK" src="https://blklabs.co/static/media/blk-logoDark.13e50d81.png" class="w-20 lg:w-24 h-20 lg:h-24" />
                </router-link>
                <BaseButton type="button" class="rounded-full p-2.5 w-10 h-10 bg-white drop-shadow-xl border-none lg:mr-10 z-20" @click="toggleNavbar()">
                    <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-black transform transition lg:duration-500 ease-in-out" :class="{'lg:-rotate-45': showMenu,' -translate-y-1': !showMenu }"></span>
                    <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-black transform transition lg:duration-500 ease-in-out" :class="{'lg:rotate-45': showMenu, ' translate-y-1': !showMenu}"></span>
                </BaseButton>
            </div>
            <Transition name="slide-fade">
                <div v-if="showMenu" class="fixed lg:absolute hidden lg:flex py-8 w-screen h-screen lg:h-fit lg:max-w-sm lg:top-8 lg:right-9 bg-accent shadow-none lg:shadow-2xl lg:shadow-accent z-10">
                    <div class="container mx-auto px-5 lg:px-10 lg:pb-14 pt-8 lg:pt-0">
                        <div class="animate__animated animate__fadeInDown grid gap-12 lg:gap-1">
                            <div class="flex items-center justify-between h-8"/>
                            <div class="grid justify-items-center lg:justify-items-start gap-8 lg:gap-3.5 lg:w-fit">
                                <router-link v-for="navItem in navItems" :key="navItem.title" :to="navItem.path" class="text-white font-bold text-4xl lg:text-left leading-[3.308rem]" @click="toggleNavbar()">{{ navItem.title }}</router-link>
                                <div class="flex items-center gap-7">
                                    <a v-for="social in socials" :key="social.path" :href="social.path" target="_blank" class="p-2 bg-white/40 rounded-full">
                                        <BaseIcon :icon="social.icon" class="text-white hover:text-white h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </nav>
    <transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="-translate-y-10 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-300 ease-out"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="-translate-y-10 opacity-0"
                >
        <div v-if="showMenu" class="fixed lg:hidden py-6 w-screen h-screen lg:h-fit lg:max-w-sm lg:top-8 lg:right-0 bg-accent shadow-none lg:shadow-2xl lg:shadow-accent z-20">
            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:pb-14 pt-4 lg:pt-0">
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
                            <a v-for="social in socials" :key="social.path" :href="social.path" target="_blank" class="p-2 bg-white/40 rounded-full">
                                <BaseIcon :icon="social.icon" class="text-white hover:text-white h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(80px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(80px);
  opacity: 0;
}
</style>