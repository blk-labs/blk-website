import { createRouter, createWebHistory } from 'vue-router'
import Home from './../pages/Home.vue'
import Services from './../pages/Services.vue'
import About from './../pages/About.vue'
import Contact from './../pages/Contact.vue'
import OurWork from './../pages/work/index.vue'
import Blog from './../pages/blog/index.vue'

export const routerHistory = createWebHistory()

export const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/services',
            name: 'services',
            component: Services
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/our-work',
            name: 'our-work',
            component: OurWork
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                    })
                }, 1300)
            })
        }
        // always scroll to top
        return { top: 0 }
    }
});