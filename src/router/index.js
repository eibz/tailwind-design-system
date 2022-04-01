import { createRouter, createWebHistory } from 'vue-router';
import DesignSystemApp from '../DesignSystemApp.vue';

const routes = [
    {
        path: '/',
        name: 'root',
        component: DesignSystemApp,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
