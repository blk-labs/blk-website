import { createRouter, createWebHistory } from 'vue-router'
import Home from './../pages/Home.vue'

export const routerHistory = createWebHistory()

export const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ],
});