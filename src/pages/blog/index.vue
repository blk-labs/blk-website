<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Article } from './../../types'

const blogs: Ref<Article[]> = ref([
    // {
    //     image: 'https://images.unsplash.com/photo-1629793604730-ad0bbc796ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    //     date: '29 February, 2020',
    //     title: 'Project is the result of a challenge I participated in as a guest on The Futur’s Young Guns series on videox',
    //     path: '',
    //     header: true
    // },
    // {
    //     image: 'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    //     date: '29 February, 2020',
    //     title: 'Project is the result of a challenge I participated in as a guest on.',
    //     path: ''
    // },
    // {
    //     image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2226&q=80',
    //     date: '29 February, 2020',
    //     title: 'Project is the result of a challenge I participated in as a guest on.',
    //     path: ''
    // },
    // {
    //     image: 'https://images.unsplash.com/photo-1591259966748-4e4b9916858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    //     date: '29 February, 2020',
    //     title: 'Project is the result of a challenge I participated in as a guest on.',
    //     path: ''
    // },
    // {
    //     image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    //     date: '29 February, 2020',
    //     title: 'Project is the result of a challenge I participated in as a guest on.',
    //     path: ''
    // },
    // {
    //     image: 'https://images.unsplash.com/photo-1597316495072-41ebce098742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    //     date: '29 February, 2020',
    //     title: 'Project is the result of a challenge I participated in as a guest on.',
    //     path: ''
    // },
    // {
    //     image: 'https://images.unsplash.com/photo-1596564239710-ed4bb717510b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    //     date: '29 February, 2020',
    //     title: 'Project is the result of a challenge I participated in as a guest on.',
    //     path: ''
    // },
])
</script>

<template>
    <div v-if="blogs.length > 0" id="our-work">
        <section class="bg-accent/10 pt-64 pb-32">
            <div class="max-w-screen-2xl mx-auto px-5 sm:px-6 md:px-8">
                <div class="grid gap-6">
                    <span class="text-primary font-bold text-lg">WE ARE BLK LABS</span>
                    <h1 class="font-bold text-[#121633] text-4xl lg:text-7xl">BLK Labs News</h1>
                </div>
            </div>
        </section>
        <section class="py-16">
            <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
                <div v-if="blogs.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-14 pb-20">
                    <div v-for="(blog, index) in blogs" :key="index" class="first:lg:col-span-2 lg:col-span-1">
                        <BaseArticle :article="blog" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    <ComingSoon v-else/>
</template>

<style scoped>

</style>