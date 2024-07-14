import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import { BaseLayout } from '@/components/layout'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: BaseLayout,
        children: [
            { path: '/', component: Home },
            { path: 'home', component: Home },
            { path: 'about', component: About },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;