import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/view/HomePage.vue';
import eKurser from '@/view/eKurser.vue';
import profilePage from '@/view/profilePage.vue';
import registerAccount from '@/view/registerAccount.vue';
import dashboardSelection from '@/view/dashboardSelection.vue';
import TATA24 from '@/view/courses/TATA24/TATA24.vue';
import TATA24Test from '@/view/courses/TATA24/TATA24Test.vue';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/ekurser',
        component: eKurser
    },
    {
        path: '/profile',
        component: profilePage   
    },
    {
        path: '/profile/register',
        component: registerAccount
    },
    {
        path: '/dashboard',
        component: dashboardSelection,
    },
    {
        path: '/TATA24',
        component: TATA24,
    },
    {
        path: '/TATA24-test',
        component: TATA24Test,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router