import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'PageHome',
        component: () => import('./pages/PageHome.vue'),
    },
    {
        path: '/survey/2022',
        name: 'PageSurvey2022',
        component: () => import('./pages/PageSurvey2022.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router