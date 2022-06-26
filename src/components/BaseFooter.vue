<script setup lang="ts">
const links = [
    {
        text: 'Services',
        path: '/services'
    },
    {
        text: 'About Us',
        path: '/about-us'
    },
    {
        text: 'Contact Us',
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
        path: '#'
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
</script>

<template>
    <footer class="pt-20 lg:pt-32 bg-[#00073A]">
        <div class="container mx-auto px-4 lg:px-0">
            <div class="grid gap-16">
                <div class="grid gap-12">
                    <div class="grid gap-6 text-white">
                        <span class="font-medium text-lg">Interested? We would love to hear from you and offer our solutions for your business.</span>
                        <h1 class="font-bold text-3xl lg:text-6xl">Lets start your next project together</h1>
                    </div>
                    <BaseButton btnType="outline" class="uppercase w-fit py-4 px-6 text-white border border-white hover:bg-white hover:text-primary hover:shadow-none">Contact us</BaseButton>
                </div>
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0">
                    <div class="flex items-center gap-8 text-white text-lg font-normal">
                        <router-link v-for="(link, i) in links" :key="i" :to="link.path">{{ link.text }}</router-link>
                    </div>
                    <div class="flex items-center gap-5">
                        <a v-for="(social, n) in socials" :key="n" :href="social.path" target="_blank" class="decoration-none rounded-full border-none bg-white/20 hover:bg-white/20 p-2">
                            <BaseIcon :icon="social.icon" class="text-white hover:text-white h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-8 border-t border-white/20 pt-6 pb-7">
                <p class="text-white text-xs font-light">
                &copy; {{ new Date().getFullYear() }} BLK Labs. All rights reserved. Legal notice and privacy policy.
                </p>
            </div>
        </div>
    </footer>
</template>