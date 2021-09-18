import Vue from 'vue';
import VueRouter from 'vue-router';
import Tutorial from '../components/Tutorial'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Tutorial
        }
    ]
});