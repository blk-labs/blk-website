import { createRouter, createWebHistory } from 'vue-router'
import Home from './../pages/Home.vue'
import Services from './../pages/Services.vue'
import About from './../pages/About.vue'
import Contact from './../pages/Contact.vue'

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
    ],
});