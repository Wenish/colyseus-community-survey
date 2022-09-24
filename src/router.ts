import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'PageHome',
        component: () => import('./pages/PageHome.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router