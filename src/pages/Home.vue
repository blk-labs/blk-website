<script setup lang="ts">
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { Service } from './../types'
// import { Article, Service, Work } from './../types'

const router = useRouter()
const contactUs = () => {
    router.push({ path: '/contact' })
}

// const blogs: Ref<Article[]> = ref([
//     {
//         image: 'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
//         date: '29 February, 2020',
//         path: '#',
//         title: 'Project is the result of a challenge I participated in as a guest on.'
//     },
//     {
//         image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2226&q=80',
//         date: '29 February, 2020',
//         path: '#',
//         title: 'Project is the result of a challenge I participated in as a guest on.'
//     },
// ])

const whatWeDo: Ref<Service[]> = ref([
    {
        image: '/assets/design.png',
        title: 'UI/UX Design',
        text: 'We work closely with our clients to wireframe, design, and sketch the most user friendly web and mobile applications.'
    },
    {
        image: '/assets/web-dev.png',
        title: 'Web development',
        text: 'We collaborate with you to create high quality websites; from simple websites to online stores to CMS, we do it all.'
    },
    {
        image: '/assets/web-app.png',
        title: 'Web application',
        text: 'One development for all platforms. We develop with the most innovative technologies to create highly scalable web apps.'
    },
])

const whatWeDo2: Ref<Service[]> = ref([
    {
        image: '/assets/mobile.png',
        title: 'Mobile application',
        text: 'We specialize in building high quality native mobile apps for Android and iOS that are interactive, engaging and fun.'
    },
    {
        image: '/assets/maintenance.png',
        title: 'Support & Maintenance',
        text: 'Our commitment doesn’t finish with the project’s end; we manage your digital product and we go with you beyond the delivery.'
    },
    {
        image: '/assets/megaphone.png',
        title: 'Digital Transformation',
        text: "Get your online products & services on the right customer's screens. We use automated tools to  stimulate growth & drive conversions."
    },
])

// const works: Ref<Work[]> = ref([
//     {
//         image: 'https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=972&q=80',
//         text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
//         title: 'Clikvet',
//         path: ''
//     },
//     {
//         image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
//         text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
//         title: 'Sketchd',
//         path: ''
//     },
//     {
//         image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
//         text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,',
//         title: 'Evolve fitness',
//         path: ''
//     },
// ])

// const marginClass = (index: number) => {
//     if (index > 0) {
//         return index === 1 ? 'mt-8' : 'mt-16'
//     } else {
//         return 'mt-0'
//     }
// }
</script>

<template>
    <div id="home">
        <section class="bg-accent/10 pt-[299px] lg:pt-[265px] pb-[159px] lg:pb-[54px] relative overflow-hidden">
            <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-5 sm:px-6 md:px-8 flex items-center">
                <div class="ml-auto lg:max-w-3xl grid gap-9 content-center">
                    <span class="text-primary font-bold text-lg">WE ARE BLK LABS</span>
                    <h1 class="font-bold text-[#121633] text-4xl lg:text-5xl leading-normal lg:leading-relaxed">A team of remote designers and developers building scalable and intuitive web solutions.</h1>
                    <BaseButton btnType="action" class="w-fit py-5 px-12 font-medium text-base" @click="contactUs">Send A Brief</BaseButton>
                </div>
                <div class="hidden lg:block lg:flex-1 lg:w-2/6">
                    <div class="absolute right-0 bottom-0">
                        <img src="/assets/keyboard.png" class="hover:scale-125 hover:mb-10 hover:mr-10 opacity-70 hover:opacity-100 w-96 transition-all ease-in-out delay-150">
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="py-16 overflow-hidden">
            <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
                <div class="relative grid gap-16">
                    <div class="grid gap-6">
                        <span class="text-primary font-bold text-lg">WHAT WE HAVE DONE</span>
                        <div class="flex justify-between items-center">
                            <h2 class="font-bold text-[#121633] text-4xl lg:text-6xl">Our recent work</h2>
                            <div class="hidden lg:flex items-center gap-4 text-3xl">
                                <BaseIcon icon="heroicons-outline:arrow-sm-left" class="text-[#989898]" />
                                <BaseButton @click="next">
                                    <BaseIcon icon="heroicons-outline:arrow-narrow-right" class="text-black" />
                                </BaseButton>
                            </div>
                        </div>
                    </div>
                    <div id="slide" class="relative w-full flex gap-10 snap-x snap-mandatory overflow-x-auto pb-14">
                        <div v-for="(work, index) in works" :key="index" :class="marginClass(index)" class="snap-start scroll-mx-6 shrink-0">
                            <BaseWork :image="work.image" :title="work.title" :text="work.text" />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div v-for="(work, index) in works" :key="index" :class="marginClass(index)" class="snap-start scroll-mx-6 shrink-0">
                            <BaseWork :image="work.image" :title="work.title" :text="work.text" />
                        </div>
                    </div>
                </div>
                <div class="lg:hidden flex mt-5 items-center justify-between gap-4 text-3xl">
                    <BaseIcon icon="heroicons-outline:arrow-sm-left" class="text-[#989898]" />
                    <BaseIcon icon="heroicons-outline:arrow-narrow-right" class="text-black" />
                </div>
            </div>
        </section> -->
        <section class="py-16">
            <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
                <div class="grid gap-6">
                    <span class="text-primary font-bold text-lg">WE ARE BLK LABS</span>
                    <div class="flex justify-between items-center">
                        <h2 class="font-bold text-[#121633] text-4xl lg:text-6xl">What we do</h2>
                    </div>
                    <div class="grid py-4 gap-20">
                        <div class="grid gap-x-24 grid-cols-1 lg:grid-cols-3">
                            <div v-for="(tech, index) in whatWeDo" :key="index" class="py-8" :class="index === 1 ? 'services-border-class' : ''">
                                <BaseService :service="tech" />
                            </div>
                        </div>
                        <div class="grid gap-x-24 grid-cols-1 lg:grid-cols-3">
                            <div v-for="(tech2, index) in whatWeDo2" :key="index" class="py-8" :class="index === 1 ? 'services-border-class' : ''">
                                <BaseService :service="tech2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-[#F8F8FF] bg-[url('/assets/map.svg')] bg-contain bg-no-repeat bg-bottom lg:bg-right pt-32 pb-44">
            <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
                <div class="grid gap-16">
                    <span class="text-primary font-bold text-lg">DESIGN . DEVELOP . MANAGE</span>
                    <h1 class="font-bold text-[#121633] text-7xl lg:text-8xl">We manage your ideas</h1>
                </div>
            </div>
        </section>
        <section class="bg-accent/20 py-12 lg:py-32">
            <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-16 justify-items-stretch">
                    <img src="/assets/team/farooq.png" class="object-cover object-center w-40 lg:w-80 h-40 lg:h-80 rounded-full lg:justify-self-start">
                    <div class="lg:col-span-2 lg:w-8/12 grid gap-6 content-center lg:font-normal">
                        <h2 class="text-accent font-medium text-3xl">We develop enterprise-grade web & digital solutions for businesses.</h2>
                        <div class="grid gap-3 font-normal">
                            <p class="text-tertiary text-lg">"Our process is very simple; we always ask ourselves if we are doing the best work we can. Because we are commited to satisfying our clients on every project, and the only way we can achieve that is by doing great work."</p>
                            <span class="text-[#121633] text-sm">Farooq Bello - Director</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="py-32 lg:py-20">
            <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
                <div class="grid gap-10">
                    <div class="flex justify-between items-center">
                        <h2 class="font-bold text-[#121633] text-4xl lg:text-6xl">Our blog</h2>
                        <router-link to="/blog" class="text-primary font-bold text-2xl hidden lg:block">View all blog</router-link>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div v-for="(blog, index) in blogs" :key="index">
                            <BaseArticle :article="blog" />
                        </div>
                    </div>
                    <span class="text-primary font-bold text-2xl ml-auto lg:hidden block">View all blog</span>
                </div>
            </div>
        </section> -->
    </div>
</template>

<style>
.services-border-class {
    position: relative;
}
.services-border-class:before {
    width: 125%;
    height: 100%;
    left: -12.5%;
    top: 0;
    border-left: 1px solid rgb(132 148 248);
    border-right: 1px solid rgb(132 148 248);
    border-style: dashed;
    content: '';
    position: absolute;
    display: block;
}
</style>















